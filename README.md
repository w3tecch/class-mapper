<p align="center">
  <img src="./icon.png" alt="w3tec" width="400" />
</p>

<h1 align="center">Class Mapper</h1>

<p align="center">
  <a href="https://david-dm.org/w3tecch/class-mapper">
    <img src="https://david-dm.org/w3tecch/class-mapper/status.svg?style=flat" alt="dependency" />
  </a>
  <a href="https://travis-ci.org/w3tecch/class-mapper">
    <img src="https://travis-ci.org/w3tecch/class-mapper.svg?branch=master" alt="travis" />
  </a>
  <a href="https://ci.appveyor.com/project/DaNautilus/class-mapper/branch/master">
    <img src="https://ci.appveyor.com/api/projects/status/jkcquiufl9us4epw/branch/master?svg=true&passingText=windows%20passing&pendingText=windows%20pending&failingText=windows%20failing" alt="appveyor" />
  </a>
  <a href="https://codecov.io/gh/w3tecch/class-mapper">
    <img src="https://codecov.io/gh/w3tecch/class-mapper/branch/master/graph/badge.svg" alt="codecov" />
  </a>
</p>

<p align="center">
  <b>A easy to use way to map any ugly backend structures into clean TypeScript/ES6 models.</b></br>
  <span>Inspired typestack <a href="https://github.com/typestack/class-transformer">class-transformer</a></span></br>
  <sub>Made with ❤️ by <a href="https://github.com/w3tecch">w3tech</a></sub>
</p>

<br />

![divider](./w3tec-divider.png)

## ❯ Why

Are you tired of ugly and weird backend structures which makes it challenging to work with in your application 🤯? Here comes a solution 🎉! Just use class-mapper to map all weird structures into TypeScript and ES6 models 👉 YOU 🤗 like to work with in your web frontend or Node.js application and not backend guys 🤪.

Try it!! We are happy to hear your feedback or any kind of new features.

![divider](./w3tec-divider.png)

## ❯ Table of Contents

- [Installation](#-installation)
- [License](#-license)
- [Methods](#-methods)

![divider](./w3tec-divider.png)

## ❯ Installation

### Step 1: Get library via npm or yarn

```shell
npm install class-mapper --save
```

or with yarn

```shell
yarn add class-mapper
```

### Step 2: Add library to your project

#### Browser
```html
<html>
   <head>
       <script src="node_modules/class-mapper/dist/class-mapper.js"></script>
   </head>
</html>
```

## ❯ Methods

### mapClasses

This method maps a source class to your target class

```typescript
import {mapClasses, MapFromSource, PropertyType} from 'class-mapper';

/**
 * Source classes
 */

abstract class SourcePersonModel {
  public name1: string;
  public name2: string;
}

class SourceCarModel {
  public attribute1: string;
  public attribute2: string;
}

class SourceCustomerModel extends SourcePersonModel {
  public car1!: SourceCarModel[];
}

const sourceUser: SourceCustomerModel = new SourceCustomerModel();

/**
 * Target classes
 */

abstract class TargetPersonModel {
  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.name1)
  public firstName!: string;

  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.name2)
  public lastName!: string;
}

class TargetCarModel {
  @MapFromSource((sourceCar: SourceCarModel) => sourceCar.attribute1)
  public manufacturer!: string;

  @MapFromSource(sourceCar: SourceCarModel) => sourceCar.attribute2)
  public model!: string;
}

class TargetCustomerModel extends TargetPersonModel {
  @PropertyType(TargetCarModel)
  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.car1)
  public cars!: TargetCarModel[];
}

const targetUser: TargetCustomerModel = mapClasses(TargetCustomerModel, sourceUser);
```

### Using `groups` to exclude properties

With `groups` array, you can exclude properties from mapping. `MapFromSource` decorators with no `groups` option will always be mapped.

```typescript
import {mapClasses, MapFromSource, PropertyType} from 'class-mapper';

/**
 * Source class
 */

abstract class SourcePersonModel {
  public name1: string;
  public name1: string;
}

/**
 * Target class
 */

const firstNameOnly = 'first-name-only';
const lastNameOnly = 'last-name-only';

abstract class TargetPersonModel {
  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.name1, { groups: [firstNameOnly] })
  public firstName!: string;

  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.name2, { groups: [lastNameOnly] })
  public lastName!: string;
}

const targetUser: TargetCustomerModel = mapClasses(TargetCustomerModel, sourceUser, { groups: [lastNameOnly] });
```

### Using `enabled` to exclude properties

With `enabled` you can exclude conditionally properties. `MapFromSource` decorators with no `enabled` option will always be mapped.

```typescript
import {mapClasses, MapFromSource, PropertyType} from 'class-mapper';

/**
 * Source class
 */

abstract class SourcePersonModel {
  public name1: string;
  public name1: string;
}

/**
 * Target class
 */

abstract class TargetPersonModel {
  @MapFromSource((sourceUser: SourcePersonModel) => sourceUser.name1, { enabled: (sourceUser: SourcePersonModel) => !!sourceUser.name1 })
  public firstName!: string;

  @MapFromSource(sourceUser => sourceUser.name2, { enabled: (sourceUser: SourcePersonModel) => !!sourceUser.name2 })
  public lastName!: string;
}

const targetUser: TargetCustomerModel = mapClasses(TargetCustomerModel, sourceUser);
```

## ❯ License

[MIT](/LICENSE)