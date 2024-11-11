// to exclude specific types

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEventType = Exclude<EventType, "scroll">; // click | mousemove

const handleEvent = (event: ExcludeEventType) => {
    console.log("Event logged:", event);
};

handleEvent("click");
handleEvent("mousemove");
// handleEvent("scroll"); // Error
