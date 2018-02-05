import config from '../components/config'
const { ytTablePerfix } = config

export const triggerTableCellClick = dom => {
	if (dom) {
        dom.click()
        let subSubChild = null
        try {
            subSubChild = dom.childNodes[0].childNodes[0]
        } catch (error) {
            
        }
		if (subSubChild) {
            subSubChild.click()
            if (subSubChild.className.indexOf('select')) {
                subSubChild.click()
                subSubChild.focus()
            }
        }
	}
}

export const getDomIndex = (dom, selector) => {
	const siblingsArr = Array.from(document.querySelectorAll(selector))
	const indexLen = siblingsArr.indexOf(dom)
	return indexLen
}

function getCanFocusChildNodes(dom) {
	return (
		(dom &&
			Array.from(dom.childNodes).filter(
				node =>
					node.className.indexOf(`${ytTablePerfix}-can-focus-cell`) >
					-1,
			)) ||
		[]
	)
}

export const getNextFocus = (dom, selector) => {
	const pNode = dom.parentNode
	const canFoucesArr = getCanFocusChildNodes(pNode)
	const selfIndex = canFoucesArr.indexOf(dom)
	const cfaLen = canFoucesArr.length
	const pIndex = getDomIndex(pNode, `.${ytTablePerfix}-row`)
	let nextNode = null
	if (selfIndex < cfaLen - 1) {
		nextNode = canFoucesArr[selfIndex + 1]
	} else {
		const nextRow = document.querySelector(
			`.${ytTablePerfix}-row:nth-child(${pIndex + 2})`,
		)
		const nextRowArr = getCanFocusChildNodes(nextRow)
		nextNode = nextRowArr[0]
	}
	if (nextNode) {
		triggerTableCellClick(nextNode)
	}
}
