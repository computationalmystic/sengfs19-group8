"""
Metrics that provides data about assignees and their associated issues
"""

import datetime
import sqlalchemy as s
import pandas as pd
from augur.util import logger, annotate, add_metrics

@annotate(tag='assignee-issues-assigned-to')
def assignee_issues_assigned_to(self, repo_group_id, repo_id=None, period='day', begin_date=None, end_date=None):
    """
    Returns a count a list of assignees to an issue

    :param repo_id: The repository's id
    :param repo_group_id: The repository's group id
    :return: DataFrame of persons/period
    """

    if repo_id:
        assigneeIssue = s.sql.text("""
            SELECT
                date_trunc(:period, new_date::DATE) as issue_date,
                COUNT(gh_user_id),
                repo_name
            FROM (
                SELECT
                    gh_user_id,
                    MIN(issues.created_at) AS new_date,
                    repo_name
                FROM
                    issues JOIN repo ON issues.repo_id = repo.repo_id
                WHERE
                    issues.repo_id = :repo_id
                    AND issues.pull_request IS NULL
                    AND issues.created_at BETWEEN :begin_date AND :end_date
                GROUP BY gh_user_id, repo_name
            ) as abc
            GROUP BY issue_date, repo_name
            ORDER BY issue_date
        """)
        results = pd.read_sql(issueNewContributor, self.database, params={'repo_id': repo_id})
    else:
        assigneeIssue = s.sql.text("""
            SELECT
                repo.repo_id,
                repo_name,
                date_trunc(:period, new_date::DATE) as issue_date,
                COUNT(gh_user_id)
            FROM (
                SELECT
                    repo_id,
                    gh_user_id,
                    MIN(created_at) AS new_date
                FROM
                    issues
                WHERE
                    issues.pull_request IS NULL
                    AND repo_id in (SELECT repo_id FROM repo WHERE repo_group_id=:repo_group_id)
                    AND created_at BETWEEN :begin_date AND :end_date
                GROUP BY gh_user_id, repo_id
            ) as abc, repo
            WHERE repo.repo_id= abc.repo_id
            GROUP BY repo.repo_id, issue_date
            ORDER BY issue_date
        """)
        results = pd.read_sql(issueNewContributor, self.database,
                              params={'repo_group_id': repo_group_id})
    return results

def create_issue_metrics(metrics):
    add_metrics(metrics, __name__)
