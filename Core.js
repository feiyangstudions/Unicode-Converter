const converPlaceHolder = "\u200C等待转换..."

// Unicode小型大写字母映射表
const smallCapsMapping = "ᴀ,ʙ,ᴄ,ᴅ,ᴇ,ꜰ,ɢ,ʜ,ɪ,ᴊ,ᴋ,ʟ,ᴍ,ɴ,ᴏ,ᴘ,ꞯ,ʀ,ꜱ,ᴛ,ᴜ,ᴠ,ᴡ,х,ʏ,ᴢ";
// Unicode手写体映射表
const handwritingMapping = "𝒜,ℬ,𝒞,𝒟,ℰ,ℱ,𝒢,ℋ,ℐ,𝒥,𝒦,ℒ,ℳ,𝒩,𝒪,𝒫,𝒬,ℛ,𝒮,𝒯,𝒰,𝒱,𝒲,𝒳,𝒴,𝒵";
const handwritingMappingSmallCaps = "𝒶,𝒷,𝒸,𝒹,ℯ,𝒻,ℊ,𝒽,𝒾,𝒿,𝓀,𝓁,𝓂,𝓃,ℴ,𝓅,𝓆,𝓇,𝓈,𝓉,𝓊,𝓋,𝓌,𝓍,𝓎,𝓏"
const boldHandwritingMapping = "𝓐,𝓑,𝓒,𝓓,𝓔,𝓕,𝓖,𝓗,𝓘,𝓙,𝓚,𝓛,𝓜,𝓝,𝓞,𝓟,𝓠,𝓡,𝓢,𝓣,𝓤,𝓥,𝓦,𝓧,𝓨,𝓩"
const boldHandwritingMappingSmallCaps = "𝓪,𝓫,𝓬,𝓭,𝓮,𝓯,𝓰,𝓱,𝓲,𝓳,𝓴,𝓵,𝓶,𝓷,𝓸,𝓹,𝓺,𝓻,𝓼,𝓽,𝓾,𝓿,𝔀,𝔁,𝔂,𝔃"
// Unicode哥特体映射表
const gothicMapping = "𝔄,𝔅,ℭ,𝔇,𝔈,𝔉,𝔊,ℌ,ℑ,𝔍,𝔎,𝔏,𝔐,𝔑,𝔒,𝔓,𝔔,ℜ,𝔖,𝔗,𝔘,𝔙,𝔚,𝔛,𝔜,ℨ";
const gothicMappingSmallCaps = "𝔞,𝔟,𝔠,𝔡,𝔢,𝔣,𝔤,𝔥,𝔦,𝔧,𝔨,𝔩,𝔪,𝔫,𝔬,𝔭,𝔮,𝔯,𝔰,𝔱,𝔲,𝔳,𝔴,𝔵,𝔶,𝔷"
const boldGothicMapping = "𝕬,𝕭,𝕮,𝕯,𝕰,𝕱,𝕲,𝕳,𝕴,𝕵,𝕶,𝕷,𝕸,𝕹,𝕺,𝕻,𝕼,𝕽,𝕾,𝕿,𝖀,𝖁,𝖂,𝖃,𝖄,𝖅"
const boldGothicMappingSmallCaps = "𝖆,𝖇,𝖈,𝖉,𝖊,𝖋,𝖌,𝖍,𝖎,𝖏,𝖐,𝖑,𝖒,𝖓,𝖔,𝖕,𝖖,𝖗,𝖘,𝖙,𝖚,𝖛,𝖜,𝖝,𝖞,𝖟"
// Unicode双线体映射表
const doubleStruckMapping = "𝔸,𝔹,ℂ,𝔻,𝔼,𝔽,𝔾,ℍ,𝕀,𝕁,𝕂,𝕃,𝕄,ℕ,𝕆,ℙ,ℚ,ℝ,𝕊,𝕋,𝕌,𝕍,𝕎,𝕏,𝕐,ℤ";
const doubleStruckMappingSmallCaps = "𝕒,𝕓,𝕔,𝕕,𝕖,𝕗,𝕘,𝕙,𝕚,𝕛,𝕜,𝕝,𝕞,𝕟,𝕠,𝕡,𝕢,𝕣,𝕤,𝕥,𝕦,𝕧,𝕨,𝕩,𝕪,𝕫"
// Unicode圆圈映射表
const circledMapping = "Ⓐ,Ⓑ,Ⓒ,Ⓓ,Ⓔ,Ⓕ,Ⓖ,Ⓗ,Ⓘ,Ⓙ,Ⓚ,Ⓛ,Ⓜ,Ⓝ,Ⓞ,Ⓟ,Ⓠ,Ⓡ,Ⓢ,Ⓣ,Ⓤ,Ⓥ,Ⓦ,Ⓧ,Ⓨ,Ⓩ"
const circledMappingSmallCaps = "ⓐ,ⓑ,ⓒ,ⓓ,ⓔ,ⓕ,ⓖ,ⓗ,ⓘ,ⓙ,ⓚ,ⓛ,ⓜ,ⓝ,ⓞ,ⓟ,ⓠ,ⓡ,ⓢ,ⓣ,ⓤ,ⓥ,ⓦ,ⓧ,ⓨ,ⓩ"
const negativeCircledMapping = "🅐,🅑,🅒,🅓,🅔,🅕,🅖,🅗,🅘,🅙,🅚,🅛,🅜,🅝,🅞,🅟,🅠,🅡,🅢,🅣,🅤,🅥,🅦,🅧,🅨,🅩"
// Unicode打字机映射表
const typewriterMapping = "𝙰,𝙱,𝙲,𝙳,𝙴,𝙵,𝙶,𝙷,𝙸,𝙹,𝙺,𝙻,𝙼,𝙽,𝙾,𝙿,𝚀,𝚁,𝚂,𝚃,𝚄,𝚅,𝚆,𝚇,𝚈,𝚉"
const typewriterMappingSmallCaps = "𝚊,𝚋,𝚌,𝚍,𝚎,𝚏,𝚐,𝚑,𝚒,𝚓,𝚔,𝚕,𝚖,𝚗,𝚘,𝚙,𝚚,𝚛,𝚜,𝚝,𝚞,𝚟,𝚠,𝚡,𝚢,𝚣"
// Unicode方块映射表
const squaredMapping = "🄰,🄱,🄲,🄳,🄴,🄵,🄶,🄷,🄸,🄹,🄺,🄻,🄼,🄽,🄾,🄿,🅀,🅁,🅂,🅃,🅄,🅅,🅆,🅇,🅈,🅉"
const negativeSquaredMapping = "🅰,🅱,🅲,🅳,🅴,🅵,🅶,🅷,🅸,🅹,🅺,🅻,🅼,🅽,🅾,🅿,🆀,🆁,🆂,🆃,🆄,🆅,🆆,🆇,🆈,🆉"


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
const unicodeMap1_1 = createMappingFromString(boldHandwritingMapping, boldHandwritingMappingSmallCaps);
const unicodeMap2 = createMappingFromString(gothicMapping, gothicMappingSmallCaps);
const unicodeMap2_1 = createMappingFromString(boldGothicMapping, boldGothicMappingSmallCaps);
const unicodeMap3 = createMappingFromString(doubleStruckMapping, doubleStruckMappingSmallCaps);
const unicodeMap4 = createMappingFromString(circledMapping, circledMappingSmallCaps);
const unicodeMap4_1 = createMappingFromString(negativeCircledMapping, negativeCircledMapping);
const unicodeMap5 = createMappingFromString(typewriterMapping, typewriterMappingSmallCaps);
const unicodeMap6 = createMappingFromString(squaredMapping, squaredMapping);
const unicodeMap6_1 = createMappingFromString(negativeSquaredMapping, negativeSquaredMapping);

// 获取DOM元素
const textInput = document.getElementById('textInput');
const inputPreview1 = document.getElementById('inputPreview1');
const result1 = document.getElementById('result1');
const inputPreview2 = document.getElementById('inputPreview2');
const result2 = document.getElementById("result2");
const inputPreview2_1 = document.getElementById('inputPreview2_1')
const result2_1 = document.getElementById("result2_1");
const inputPreview3 = document.getElementById('inputPreview3');
const result3 = document.getElementById("result3");
const inputPreview3_1 = document.getElementById('inputPreview3_1')
const result3_1 = document.getElementById("result3_1");
const inputPreview4 = document.getElementById('inputPreview4');
const result4 = document.getElementById("result4");
const inputPreview5 = document.getElementById('inputPreview5');
const result5 = document.getElementById("result5");
const inputPreview5_1 = document.getElementById('inputPreview5_1');
const result5_1 = document.getElementById("result5_1");
const inputPreview6 = document.getElementById('inputPreview6');
const result6 = document.getElementById("result6");
const inputPreview7 = document.getElementById('inputPreview7');
const result7 = document.getElementById("result7");
const inputPreview7_1 = document.getElementById('inputPreview7_1');
const result7_1 = document.getElementById("result7_1");

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
  updateSingleConversion(inputPreview2_1, result2_1, unicodeMap1_1);
  updateSingleConversion(inputPreview3, result3, unicodeMap2);
  updateSingleConversion(inputPreview3_1, result3_1, unicodeMap2_1);
  updateSingleConversion(inputPreview4, result4, unicodeMap3);
  updateSingleConversion(inputPreview5, result5, unicodeMap4);
  updateSingleConversion(inputPreview5_1, result5_1, unicodeMap4_1)
  updateSingleConversion(inputPreview6, result6, unicodeMap5);
  updateSingleConversion(inputPreview7, result7, unicodeMap6);
  updateSingleConversion(inputPreview7_1, result7_1, unicodeMap6_1)
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
