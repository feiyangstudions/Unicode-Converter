(function(){
  if (window.__tabbitWidgetDiagnosticsInstalled) return;
  window.__tabbitWidgetDiagnosticsInstalled = true;
  window.__TABBIT_WIDGET_ERRORS__ = window.__TABBIT_WIDGET_ERRORS__ || [];
  function emit(level, args) {
    var payload = {
      type: "tabbit_widget_diagnostics",
      level: level,
      message: Array.prototype.slice.call(args || []).map(function(item) {
        if (item && item.stack) return item.stack;
        if (typeof item === "string") return item;
        try { return JSON.stringify(item); } catch (_) { return String(item); }
      }).join(" "),
      timestamp: Date.now()
    };
    window.__TABBIT_WIDGET_ERRORS__.push(payload);
    try { window.parent && window.parent.postMessage(payload, "*"); } catch (_) {}
  }
  var originalError = console.error;
  console.error = function() {
    emit("error", arguments);
    return originalError && originalError.apply(console, arguments);
  };
  window.addEventListener("error", function(event) {
    emit("error", [event.message || "Script error", event.filename || "", event.lineno || ""]);
  });
  window.addEventListener("unhandledrejection", function(event) {
    emit("unhandledrejection", [event.reason || "Unhandled promise rejection"]);
  });
})();