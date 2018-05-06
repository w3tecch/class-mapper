export function MapTo(path: string): classMapper.IPropertyDecorator {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): void => {
    console.log('MapTo(): called');
  };
}
