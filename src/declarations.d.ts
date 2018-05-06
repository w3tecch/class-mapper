declare namespace classMapper {
  interface IPropertyDecorator {
    (target: any, propertyKey: string, descriptor: PropertyDescriptor): void
  }
}

declare module 'class-mapper' {
  export function MapTo(path: string): classMapper.IPropertyDecorator;
}
