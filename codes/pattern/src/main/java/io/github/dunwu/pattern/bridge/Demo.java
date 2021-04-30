package io.github.dunwu.pattern.bridge;

public class Demo {

    public static void main(String[] args) {
        testDevice(new Tv());
        testDevice(new Radio());
    }

    public static void testDevice(Device device) {
        System.out.println("Tests with basic remote.");
        BasicRemote basicRemote = new BasicRemote(device);
        basicRemote.power();
        device.printStatus();

        System.out.println("Tests with advanced remote.");
        AdvancedRemote advancedRemote = new AdvancedRemote(device);
        advancedRemote.power();
        advancedRemote.mute();
        device.printStatus();
    }

}
// 输出：
//
// Tests with basic remote.
// Remote: power toggle
// ------------------------------------
// | I'm TV set.
// | I'm enabled
// | Current volume is 30%
// | Current channel is 1
// ------------------------------------
//
// Tests with advanced remote.
// Remote: power toggle
// Remote: mute
// ------------------------------------
// | I'm TV set.
// | I'm disabled
// | Current volume is 0%
// | Current channel is 1
// ------------------------------------
//
// Tests with basic remote.
// Remote: power toggle
// ------------------------------------
// | I'm radio.
// | I'm enabled
// | Current volume is 30%
// | Current channel is 1
// ------------------------------------
//
// Tests with advanced remote.
// Remote: power toggle
// Remote: mute
// ------------------------------------
// | I'm radio.
// | I'm disabled
// | Current volume is 0%
// | Current channel is 1
// ------------------------------------
