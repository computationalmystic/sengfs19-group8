from flask import Response

def create_assignee_routes(server):

    metrics = server._augur.metrics

    """
    @api {get} /repo-groups/:repo_group_id/assignee-issues-assigned-to Assignees (Repo Group)
    @apiName issues-new-repo-group
    @apiGroup Evolution
    @apiDescription Time series of number of new issues opened during a certain period.
                    <a href="https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_New.md">CHAOSS Metric Definition</a>
    @apiParam {string} repo_group_id Repository Group ID
    @apiParam {string=day, week, month, year} [period="day"] Periodicity specification.
    @apiParam {string} [begin_date="1970-1-1 0:0:0"] Beginning date specification. E.g. values: `2018`, `2018-05`, `2019-05-01`
    @apiParam {string} [end_date="current date"] Ending date specification. E.g. values: `2018`, `2018-05`, `2019-05-01`
    @apiSuccessExample {json} Success-Response:
                    [
                        {
                            "repo_id": 21000,
                            "repo_name": "rails",
                            "assignees": 318
                        },
                        {
                            "repo_id": 21002,
                            "repo_name": "acts_as_list",
                            "assignees": 1
                        },
                        {
                            "repo_id": 21002,
                            "repo_name": "acts_as_list",
                            "assignees": 7
                        }
                    ]
    """
    server.addRepoGroupMetric(metrics.assignee_issues_assigned_to, 'assignee-issues-assigned-to')

    """
    @api {get} /repo-groups/:repo_group_id/repos/:repo_id/assignee-issues-assigned-to Assignees (Repo)
    @apiName issues-new-repo
    @apiGroup Evolution
    @apiDescription Time series of number of new issues opened during a certain period.
                    <a href="https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_New.md">CHAOSS Metric Definition</a>
    @apiParam {string} repo_group_id Repository Group ID.
    @apiParam {string} repo_id Repository ID.
    @apiParam {string=day, week, month, year} [period="day"] Periodicity specification.
    @apiParam {string} [begin_date="1970-1-1 0:0:0"] Beginning date specification. E.g. values: `2018`, `2018-05`, `2019-05-01`
    @apiParam {string} [end_date="current date"] Ending date specification. E.g. values: `2018`, `2018-05`, `2019-05-01`
    @apiSuccessExample {json} Success-Response:
                    [
                        {
                            "repo_name": "rails",
                            "assignees": 116
                        },
                        {
                            "repo_name": "rails",
                            "assignees": 196
                        },
                        {
                            "repo_name": "rails",
                            "assignees": 180
                        }
                    ]
    """
    server.addRepoMetric(metrics.assignee_issues_assigned_to, 'assignee-issues-assigned-to')
