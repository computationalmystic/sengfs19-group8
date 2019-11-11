var monthsToSubtract = 6;

$(document).ready(function() {
    getRepoGroupNewContributors();
});

function resetWithFilter() {
    $("#sectionList").empty();
    $("#sectionBody").empty();

    getRepoGroupNewContributors();
}

function getRepoGroupNewContributors() {
    $.get("https://cors-anywhere.herokuapp.com/http://129.114.104.249:8081/api/unstable/repo-groups", function(repodata, status){

        var repoGroups = repodata;
        monthsToSubtract = $("#monthInput").val();

        repoGroups.forEach((e) => {

            var beginDate = new Date();
            var endDate = new Date();

            beginDate.setMonth(beginDate.getMonth() - monthsToSubtract);

            var newBeginDate = beginDate.getFullYear() + "-" + (beginDate.getMonth() + 1) + "-" + beginDate.getDate();

            var newEndDate = endDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate();
            console.log(newBeginDate);

            $.get("https://cors-anywhere.herokuapp.com/http://129.114.104.249:8081/api/unstable/repo-groups/" + e.repo_group_id + "/contributors-?period=week&begin_date="+ newBeginDate + "&end_date=" + newEndDate, function(newContributors) {

                if (newContributors.length > 1) { //we need at least 2 datapoints
                    var contCount = [];
                    var weekNums = [];

                    console.log(newContributors);

                    //this nested loop will combine the counts from different repos on the same date
                    newContributors.forEach((f, index) => {

                        newContributors.forEach((g, i) => {
                            if (f.contribute_at === g.contribute_at && index != i) {
                                f.count += g.count;
                                newContributors.splice(i, 1);
                            }
                        });

                        contCount.push(f.count);
                        weekNums.push(index + 1);
                        newContributors.splice(index, 1);

                    });

                    $("#sectionList").append('<li><a href="#'+ e.repo_group_id + '">'+ e.rg_name + '</a></li>');

                    $("#sectionBody").append('<div id="'+ e.repo_group_id +'"></div>');
                    $("#" + e.repo_group_id).append('<h1>' + e.rg_name + '</h1>');
                    $("#" + e.repo_group_id).append('<canvas id="'+ e.repo_group_id +'-canvas"></canvas>');

                    createGraph(contCount, weekNums, e);
                }

            });

        });
    });
}

function createGraph(contributors, weeks, data) {
    var id = data.repo_group_id;

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    var config = {
        type: 'line',
        data: {
            datasets: [{
                borderWidth: 1,
                borderColor: "rgba(" + r + "," + g + "," + b + ", 0.8)",
                backgroundColor : "rgba(" + r + "," + g + "," + b + ", 0.5)",
                data: contributors,
                label: data.rg_name
            }],
            labels: weeks
        },
        options: {
            responsive: true,
				legend: {
					display: false,
				},
				title: {
					display: true,
					text: 'Weekly New Contributors Over Last '+ monthsToSubtract +' Months'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
        }
    };

    var ctx = document.getElementById(id + "-canvas");
    window.myChart = new Chart(ctx, config);

}
