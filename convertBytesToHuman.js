/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default function convertBytesToHuman(bytes)
{
        if ((typeof bytes != "number") || (bytes < 0) || (!isFinite(bytes)))
            return false
        else
        {
            let counter = 0
            while ((bytes >= 1024) && (counter < 3))
            {
                bytes /= 1024
                counter++
            }
            switch (counter)
            {
                case 0:
                    return `${Math.round(bytes)} Б`
                    break
                case 1:
                    return `${Math.round(bytes)} КБ`
                    break
                case 2:
                    return `${Math.round(bytes)} МБ`
                    break
                case 3:
                default:
                    return `${Math.round(bytes)} ГБ`
                    break
            }
        }
}

