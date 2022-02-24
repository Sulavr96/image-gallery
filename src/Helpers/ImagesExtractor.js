export function ImagesExtractor(files) {
    let images = {};
    files.keys().map((item, index) => { images[item.replace('./', '')] = files(item); });
    return images;
  }
  