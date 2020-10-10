package io.github.dunwu.pattern.singleton;

/**
 * 实现一个粗糙的单例非常简单。 你仅需隐藏构造函数并实现一个静态的构建方法即可。
 */
public class DemoSingleThread {

    public static void main(String[] args) {
        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\n" +
            "If you see different values, then 2 singletons were created (booo!!)" + "\n\n" +
            "RESULT:" + "\n");
        Singleton singleton = Singleton.getInstance("FOO");
        Singleton anotherSingleton = Singleton.getInstance("BAR");
        System.out.println(singleton.value);
        System.out.println(anotherSingleton.value);
    }

}
