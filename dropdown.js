export default function dropdown(trigger, content) {
  document.addEventListener("DOMContentLoaded", () => {
    content.hidden = true
  })
  trigger.addEventListener("click", (event) => {
    content.hidden = content.hidden ? false : true
    event.stopPropagation()
    document.addEventListener(
      "click",
      (e) => {
        if (e.target !== content) content.hidden = true
      },
      { once: true }
    )
  })
}
