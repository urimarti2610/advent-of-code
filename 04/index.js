import { getInput, returnResult } from '../helper.js'

const input = getInput(4)

function getResult(isSecondPart = false) {
    if (isSecondPart) {
        return 0
    }

    return 0
}

export default returnResult(getResult(), getResult(true))