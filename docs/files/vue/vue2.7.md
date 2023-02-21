### 指令

```
/**
 * 限流
 * <button v-throttle />
 * <button v-throttle="500" />
 */
const throttle = {
    inserted(el, binding) {
        let throttleTime = binding.value
        if (!throttleTime) { 
            throttleTime = 2000
        }

        el.addEventListener('click', e => {
            el.classList.add('disabled')
            el.disabled = true
            setTimeout(() => {
                el.disabled = false
                el.classList.remove('disabled')
            }, throttleTime)
        })
    }
}

/**
 * 按钮点击态（缩放一下）
 * <button v-click-scale />
 * <button v-click-scale="0.85" />
 */
const clickScale = {
    inserted(el, binding) {
        let scale = binding.value
        if (!scale) { 
            scale = 0.95
        }
        el.addEventListener('click', e => {
            el.style.transform = `scale(${scale})`
            setTimeout(() => {
                el.style.transform = 'scale(1)'
            }, 100)
        })
    }
}

export {
    throttle,
    clickScale
}

```
