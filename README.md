# Design

> 架构设计相关知识

## 重构

### 前言

- [对于重构的思考](docs/refactor/think-in-refactor.md)

### 代码臃肿(Bloated)

> **这组坏味道意味着：代码中的类、函数、字段没有经过合理的组织，只是简单的堆砌起来。这一类型的问题通常在代码的初期并不明显，但是随着代码规模的增长而逐渐积累（特别是当没有人努力去根除它们时）。**

- [过长函数](docs/refactor/chapter01/过长函数.md)
- [过大的类](docs/refactor/chapter01/过大的类.md)
- [基本类型偏执](docs/refactor/chapter01/基本类型偏执.md)
- [过长参数列](docs/refactor/chapter01/过长参数列.md)
- [数据泥团](docs/refactor/chapter01/数据泥团.md)

### 滥用面向对象(Object-Orientation Abusers)

> **这组坏味道意味着：代码部分或完全地违背了面向对象编程原则。**

- [switch 声明](docs/refactor/chapter02/switch声明.md)
- [临时字段](docs/refactor/chapter02/临时字段.md)
- [被拒绝的馈赠](docs/refactor/chapter02/被拒绝的馈赠.md)
- [异曲同工的类](docs/refactor/chapter02/异曲同工的类.md)

### 变革的障碍(Change Preventers)

> **这组坏味道意味着：当你需要改变一处代码时，却发现不得不改变其他的地方。这使得程序开发变得复杂、代价高昂。**

- [发散式变化](docs/refactor/chapter03/发散式变化.md)
- [霰弹式修改](docs/refactor/chapter03/霰弹式修改.md)
- [平行继承体系](docs/refactor/chapter03/平行继承体系.md)

### 非必要的(Dispensables)

> **这组坏味道意味着：这样的代码可有可无，它的存在反而影响整体代码的整洁和可读性。**

- [过多的注释](docs/refactor/chapter04/过多的注释.md)
- [重复代码](docs/refactor/chapter04/重复代码.md)
- [冗余类](docs/refactor/chapter04/冗余类.md)
- [纯稚的数据类](docs/refactor/chapter04/纯稚的数据类.md)
- [夸夸其谈未来性](docs/refactor/chapter04/夸夸其谈未来性.md)

### 耦合(Couplers)

> **这组坏味道意味着：不同类之间过度耦合。**

- [依恋情结](docs/refactor/chapter05/依恋情结.md)
- [狎昵关系](docs/refactor/chapter05/狎昵关系.md)
- [过度耦合的消息链](docs/refactor/chapter05/过度耦合的消息链.md)
- [中间人](docs/refactor/chapter05/中间人.md)
- [不完美的库类](docs/refactor/chapter05/不完美的库类.md)
