
export default function (state) {
  const { document, selection } = state
  const texts = document.getTextNodes()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 1,
    focusKey: first.key,
    focusOffset: 2
  })

  return state
    .transform()
    .removeMarkAtRange(range, 'bold')
    .apply()
}
