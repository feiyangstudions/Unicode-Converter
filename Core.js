const converPlaceHolder = "\u200C等待转换..."

// Unicode小型大写字母映射表
const smallCapsMapping = "ᴀ,ʙ,ᴄ,ᴅ,ᴇ,ꜰ,ɢ,ʜ,ɪ,ᴊ,ᴋ,ʟ,ᴍ,ɴ,ᴏ,ᴘ,ǫ,ʀ,ѕ,ᴛ,ᴜ,ᴠ,ᴡ,х,ʏ,ᴢ";
// Unicode手写体映射表
const handwritingMapping = "𝒜,ℬ,𝒞,𝒟,ℰ,ℱ,𝒢,ℋ,ℐ,𝒥,𝒦,ℒ,ℳ,𝒩,𝒪,𝒫,𝒬,ℛ,𝒮,𝒯,𝒰,𝒱,𝒲,𝒳,𝒴,𝒵";
const handwritingMappingSmallCaps = "𝒶,𝒷,𝒸,𝒹,ℯ,𝒻,ℊ,𝒽,𝒾,𝒿,𝓀,𝓁,𝓂,𝓃,ℴ,𝓅,𝓆,𝓇,𝓈,𝓉,𝓊,𝓋,𝓌,𝓍,𝓎,𝓏"
// Unicode哥特体映射表
const gothicMapping = "𝔄,𝔅,ℭ,𝔇,𝔈,𝔉,𝔊,ℌ,ℑ,𝔍,𝔎,𝔏,𝔐,𝔑,𝔒,𝔓,𝔔,ℜ,𝔖,𝔗,𝔘,𝔙,𝔚,𝔛,𝔜,ℨ";
const gothicMappingSmallCaps = "𝔞,𝔟,𝔠,𝔡,𝔢,𝔣,𝔤,𝔥,𝔦,𝔧,𝔨,𝔩,𝔪,𝔫,𝔬,𝔭,𝔮,𝔯,𝔰,𝔱,𝔲,𝔳,𝔴,𝔵,𝔶,𝔷"
// Unicode双线体映射表
const doubleStruckMapping = "𝔸,𝔹,ℂ,𝔻,𝔼,𝔽,𝔾,ℍ,𝕀,𝕁,𝕂,𝕃,𝕄,ℕ,𝕆,ℙ,ℚ,ℝ,𝕊,𝕋,𝕌,𝕍,𝕎,𝕏,𝕐,ℤ";
const doubleStruckMappingSmallCaps = "𝕒,𝕓,𝕔,𝕕,𝕖,𝕗,𝕘,𝕙,𝕚,𝕛,𝕜,𝕝,𝕞,𝕟,𝕠,𝕡,𝕢,𝕣,𝕤,𝕥,𝕦,𝕧,𝕨,𝕩,𝕪,𝕫"

// 将字符串转换为映射对象
function createMappingFromString(mappingString, smallCaps) {
  const chars = mappingString.split(',');
  const schars = smallCaps.split(',');
  const mapping = {};
  
  // 标准英文字母顺序
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // 为每个字母创建映射（大小写都映射到相同的Unicode字符）
  for (let i = 0; i < 26; i++) {
    const lowerChar = alphabet[i];
    const upperChar = alphabetUpper[i];
    const unicodeChar = chars[i];
    const smallChar = schars[i];
    
    mapping[lowerChar] = smallChar;
    mapping[upperChar] = unicodeChar;
  }
  
  return mapping;
}

// 创建映射表
const unicodeMap = createMappingFromString(smallCapsMapping, smallCapsMapping);
const unicodeMap1 = createMappingFromString(handwritingMapping, handwritingMappingSmallCaps);
const unicodeMap2 = createMappingFromString(gothicMapping, gothicMappingSmallCaps);
const unicodeMap3 = createMappingFromString(doubleStruckMapping, doubleStruckMappingSmallCaps);

// 获取DOM元素
const textInput = document.getElementById('textInput');
const inputPreview1 = document.getElementById('inputPreview1');
const result1 = document.getElementById('result1');
const inputPreview2 = document.getElementById('inputPreview2');
const result2 = document.getElementById("result2");
const inputPreview3 = document.getElementById('inputPreview3');
const result3 = document.getElementById("result3");
const inputPreview4 = document.getElementById('inputPreview4');
const result4 = document.getElementById("result4");

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
  updateSingleConversion(inputPreview4, result4, unicodeMap3);
}

// 回车键时更新所有转换
textInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    updateAllConversions();
  }
});

// 输入时实时更新所有预览和转换结果
textInput.addEventListener('input', function() {
  const inputText = textInput.value;
  // 更新所有预览
  inputPreview1.textContent = inputText || '等待输入...';
  inputPreview2.textContent = inputText || '等待输入...';
  inputPreview3.textContent = inputText || '等待输入...';
  inputPreview4.textContent = inputText || '等待输入...';
  
  // 实时转换所有样式
  if (inputText) {
    result1.textContent = convertTextToUnicode(inputText, unicodeMap);
    result2.textContent = convertTextToUnicode(inputText, unicodeMap1);
    result3.textContent = convertTextToUnicode(inputText, unicodeMap2);
    result4.textContent = convertTextToUnicode(inputText, unicodeMap3);

  } else {
    result1.textContent = converPlaceHolder;
    result2.textContent = converPlaceHolder;
    result3.textContent = converPlaceHolder;
    result4.textContent = converPlaceHolder;
  }
});

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

// 调试信息：显示映射表内容
console.log('Unicode映射表已创建：', unicodeMap);
console.log('原始映射字符串：', smallCapsMapping);
console.log('Unicode映射表已创建：', unicodeMap1);
console.log('原始映射字符串：', handwritingMapping, handwritingMappingSmallCaps);
console.log('Unicode映射表已创建：', unicodeMap2);
console.log('原始映射字符串：', gothicMapping, gothicMappingSmallCaps);
console.log('Unicode映射表已创建：', unicodeMap3);
console.log('原始映射字符串：', doubleStruckMapping, doubleStruckMappingSmallCaps);
console.log('所有映射表已初始化完成');