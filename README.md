# postcss-bem-snap

![Build Status](https://img.shields.io/travis/coco-platform/postcss-bem-snap/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/postcss-bem-snap/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/postcss-bem-snap?branch=master)
![Package Dependency](https://david-dm.org/coco-platform/postcss-bem-snap.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/postcss-bem-snap/dev-status.svg?style=flat)

```pcss
@block vip {
  text-align: center;
  background-color: aquamarine;

  @element header {
    color: mediumpurple;

    @modifier sm {
      font-size: 16px;
    }

    @modifier md {
      font-size: 24px;
    }

    @modifier lg {
      font-size: 36px;
    }
  }

  @modifier gold {
    background-color: gold;
  }

  @modifier platinum {
    background-color: plum;
  }
}
```

```css
.vip {
  text-align: center;
  background-color: aquamarine;
}

.vip--platinum {
  background-color: plum;
}

.vip--gold {
  background-color: gold;
}

.vip__header {
  color: mediumpurple;
}

.vip__header--lg {
  font-size: 36px;
}

.vip__header--md {
  font-size: 24px;
}

.vip__header--sm {
  font-size: 16px;
}
```

## Usage

```js
postcss([require('postcss-bem-snap')]);
```

# Licence

MIT
