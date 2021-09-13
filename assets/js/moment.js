var lastDate = null;

var nav = new DayPilot.Navigator("nav", {
    selectMode: "week",
    onBeforeCellRender: function(args) {
        if (args.cell.day < DayPilot.Date.today()) {
            args.cell.cssClass = "navigator-disabled-cell";
        }
    },
    onTimeRangeSelect: function(args) {
        if (args.day < DayPilot.Date.today()) {
            args.preventDefault();
            nav.select(lastDate, {dontNotify: true, dontFocus: true});
        }
        else {
            lastDate = args.start;
        }
    },
    onTimeRangeSelected: function(args) {
        dp.startDate = args.start;
        dp.update();
    }

});
nav.init();

var dp = new DayPilot.Calendar("dp", {
    viewType: "Week",
    onTimeRangeSelected: function (args) {
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
            var dp = args.control;
            dp.clearSelection();
            if (!modal.result) { return; }
            dp.events.add(new DayPilot.Event({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result
            }));
        });
    }
onBeforeCellRender: function(args) {
    if (args.cell.start < DayPilot.Date.today()) {
        args.cell.disbanded = true;
        args.cell.backColor = "#eee";
    }
}
});
dp.events.list = [
    {
        id: "1",
        start: DayPilot.Date.today().addHours(10),
        end: DayPilot.Date.today().addHours(12),
        text: "Event 1"
    }
];
dp.init();