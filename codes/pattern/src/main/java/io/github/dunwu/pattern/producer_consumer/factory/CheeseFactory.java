package io.github.dunwu.pattern.producer_consumer.factory;

import io.github.dunwu.pattern.producer_consumer.product.Cheese;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * @author <a href="mailto:forbreak@163.com">Zhang Peng</a>
 * @since 2020-08-09
 */
@Slf4j
public class CheeseFactory {

    public static int CONSUMER_ONCE_NUM = 100;
    // 奶酪产线
    private final CheeseCreator creator = new CheeseCreator();
    // 仓储
    private final LinkedBlockingQueue<Cheese> storage = new LinkedBlockingQueue<>(1000);

    public void produce() {
        try {
            storage.put(creator.produceCheese());
            log.debug("生产一份奶酪，现库存：{}", storage.size());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public List<Cheese> consume() {
        List<Cheese> list = new ArrayList<>(CONSUMER_ONCE_NUM);
        if (storage.size() < CONSUMER_ONCE_NUM) {
            return list;
        }

        try {
            synchronized (storage) {
                for (int i = 0; i < CONSUMER_ONCE_NUM; i++) {
                    list.add(storage.take());
                }
            }
            log.info("消费了一百份奶酪，现库存：{}", storage.size());
            return list;
        } catch (InterruptedException e) {
            e.printStackTrace();
            return list;
        }
    }

}
