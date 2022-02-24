export function ImagesExtractor(files) {
    console.log(files)
    let images = {};
    files.keys().map((item, index) => { images[item.replace('./', '')] = files(item); });
    return images;
  }
  