const converPlaceHolder = "\u200C等待转换..."

// Unicode双线体映射表
const doubleStruckMapping = "𝟘,𝟙,𝟚,𝟛,𝟜,𝟝,𝟞,𝟟,𝟠,𝟡";
const superscriptMapping = "⁰,¹,²,³,⁴,⁵,⁶,⁷,⁸,⁹";
const subscriptMapping = "₀,₁,₂,₃,₄,₅,₆,₇,₈,₉";

// 将字符串转换为映射对象
function createMappingFromString(mappingString) {
  const chars = mappingString.split(',');
  const mapping = {};
  
  // 标准英文字母顺序
  const nums = '0123456789';
  
  // 为每个字母创建映射（大小写都映射到相同的Unicode字符）
  for (let i = 0; i < 10; i++) {
    const Char = nums[i];
    const unicodeChar = chars[i];
    
    mapping[Char] = unicodeChar;
  }
  
  return mapping;
}

// 创建映射表
const unicodeMap = createMappingFromString(doubleStruckMapping);
const unicodeMap1 = createMappingFromString(superscriptMapping);
const unicodeMap2 = createMappingFromString(subscriptMapping);

// 获取DOM元素
const textInput = document.getElementById('textInput');
const inputPreview1 = document.getElementById('inputPreview1');
const result1 = document.getElementById('result1');
const inputPreview2 = document.getElementById('inputPreview2');
const result2_1 = document.getElementById("result2_1");
const inputPreview3 = document.getElementById('inputPreview3');
const result3 = document.getElementById("result3");

// 转换函数：在映射表中查找并输出对应的Unicode字符
function convertTextToUnicode(text, map) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    // 在映射表中查找字符
    if (map[char]) {
      // 如果找到映射，使用转换后的字符
      result += map[char];
    } else {
      // 如果不在映射表中，保持原样
      result += char;
    }
  }
  
  return result;
}

// 更新单个转换结果
function updateSingleConversion(inputPreview, resultElement, map) {
  const inputText = textInput.value;
  
  // 更新输入预览（显示原始输入，包括空格）
  inputPreview.textContent = inputText || '等待输入...';
  
  // 如果输入为空，显示提示
  if (!inputText) {
    resultElement.textContent = converPlaceHolder;
    return;
  }
  
  // 执行转换：在映射表中查找并输出
  const convertedText = convertTextToUnicode(inputText, map);
  resultElement.textContent = convertedText;
}

// 更新所有转换结果
function updateAllConversions() {
  updateSingleConversion(inputPreview1, result1, unicodeMap);
  updateSingleConversion(inputPreview2, result2, unicodeMap1);
  updateSingleConversion(inputPreview3, result3, unicodeMap2);
}

// 回车键时更新所有转换
textInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    updateAllConversions();
  }
});

// 输入时实时更新所有预览和转换结果
textInput.addEventListener('input', updateAllConversions);

function copyDivText(divId) {
  // 获取div元素及其文本内容
  const divElement = document.getElementById(divId);
  const textToCopy = divElement.textContent || divElement.innerText;

  if(textToCopy == converPlaceHolder) {
    alert('您还没有输入转换文本！')
    return
  }

  // 使用现代 Clipboard API
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('文本已成功复制到剪贴板: ', textToCopy);
      // 可以在这里添加用户提示，例如显示“复制成功”的弹窗
      alert('文本已复制！');
    })
    .catch(err => {
      console.error('复制失败: ', err);
    });
}

// 初始化显示
updateAllConversions();