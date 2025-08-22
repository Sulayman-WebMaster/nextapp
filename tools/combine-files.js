/**
 * combine-files.js
 *
 * 선택한 폴더와 하위폴더 포함 모든 파일을 읽어서
 * output.txt 파일로 합친다
 */
//node tools/combine-files.js

const fs = require('fs');
const path = require('path');

// 1) 합칠 대상 폴더 경로 설정
// const baseFolder = path.join(__dirname, '../..', 's1-frontend-main');
const baseFolder = path.join(__dirname, '../');

// 2) 결과를 저장할 파일 경로
const outputFile = path.join(__dirname, 'output.txt');

// ------------------------------------------------------------

// 제외할 파일 목록
const excludeFiles = [
  'tsconfig.tsbuildinfo',
  '.env',
  'favicon.ico',
  '.eslintrc.js',
  'jest.config.js',
  'tsconfig.json',
  '.env.docker',
  '.env.local',
  'eslint.config.js',
];

// 제외할 폴더 목록
const excludeFolders = ['node_modules', '.next', 'dist', 'public', '.turbo', 'test', 'test-e2e', 'test-results'];

// 허용할 파일 확장자 (코드 파일만 포함)
const allowedExtensions = ['.js', '.ts', '.jsx', '.tsx'];

/**
 * 지정한 폴더(dirPath)와 그 하위폴더에 있는 모든 파일 경로를
 * 하나의 배열(arrayOfFiles)로 반환한다.
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (excludeFolders.some(folder => dirPath.includes(`${path.sep}${folder}${path.sep}`)
    || dirPath.endsWith(`${path.sep}${folder}`))) {
    return arrayOfFiles;
  }

  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (!excludeFiles.includes(file) && allowedExtensions.includes(ext)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

/**
 * 수집한 파일 목록을 순회하며 파일 내용을 합쳐서 outputFile에 기록한다.
 */
function combineFiles() {
  const allFiles = getAllFiles(baseFolder);
  let combinedContent = '';

  allFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    combinedContent += `// --------------------\n`;
    combinedContent += `// File: ${filePath}\n`;
    combinedContent += `// --------------------\n`;
    combinedContent += `${content}\n\n`;
  });

  fs.writeFileSync(outputFile, combinedContent);
  console.log(`All files combined into => ${outputFile}`);
}

combineFiles();

/**
 * 명령프롬프트(터미널)에서 M-1-BACKEND/tools 폴더에서 다음 명령어로 실행:
 * node combine-files.js
 */