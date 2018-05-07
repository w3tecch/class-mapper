import { metadataStorage } from '../storage/storage';

/**
 * map ugly model to clean model
 * @param uglyModel model containing ugly data
 * @param cleanModel model to map clean data
 */
export function uglyToClean(uglyData: {}, cleanModel: {}) {
  console.log('uuuuuuuuugggggggg', uglyData);
  console.log('hcsdfhkdfhkfhkdsh', cleanModel);
  const mapFromMetadata = metadataStorage.getMapFrom(cleanModel);

  console.log('faaaaaaaam', mapFromMetadata);

  mapFromMetadata.forEach(mapFrom => {
    cleanModel[mapFrom.propertyKey] = uglyData[mapFrom.path];
  });
}
