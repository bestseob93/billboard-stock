var chart = bb.generate({
    bindto: "#chart",
    data: {
    	type: "line",
        columns: [
            ['네이버', 826000, 837000, 830000, 826000, 828000, 841000, 835000]
        ]
    }
});

var timeChart = bb.generate({
    bindto: "#TimeseriesChart",
    data: {
    	x: "x",
        columns: [
            ["x", "2017-12-07", "2017-12-08", "2017-12-11", "2017-12-12", "2017-12-13", "2017-12-14"],
            ['네이버', 826000, 837000, 830000, 826000, 828000, 841000, 835000]
        ]
    },
    axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d"
          }
        }
      },
});

var splineChart = bb.generate({
    bindto: "#splineChart",
    data: {
        type: "spline",
        columns: [
            ['네이버', 826000, 837000, 830000, 826000, 828000, 841000, 835000]
        ]
    }
});