package io.github.dunwu.pattern.proxy.right;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Documented
@Inherited
public @interface BankAPI {

    String desc() default "";

    String url() default "";

}
