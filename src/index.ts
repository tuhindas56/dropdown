type keepOpenOnContentClick = {
  keepOpenOnContentClick: boolean
}

export default function dropdown(
  trigger: HTMLElement,
  content: HTMLElement,
  { keepOpenOnContentClick }: keepOpenOnContentClick
) {
  document.addEventListener("DOMContentLoaded", () => {
    content.hidden = true
  })
  trigger.addEventListener("click", (event) => {
    content.hidden = content.hidden ? false : true
    event.stopPropagation()
  })
  document.addEventListener("click", (e) =>
    toggle(e, content, keepOpenOnContentClick)
  )
}

function toggle(
  e: MouseEvent,
  content: HTMLElement,
  keepOpenOnContentClick: boolean
) {
  const target = e.target as HTMLElement
  if (keepOpenOnContentClick) {
    if (!(content.contains(target) || target === content)) {
      content.hidden = true
      return
    }
  } else {
    if (!(target === content)) {
      content.hidden = true
      return
    }
  }
}
