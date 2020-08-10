package io.github.dunwu.pattern.producer_consumer;

import io.github.dunwu.pattern.producer_consumer.factory.CheeseFactory;
import io.github.dunwu.pattern.producer_consumer.product.Cheese;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

/**
 * @author <a href="mailto:forbreak@163.com">Zhang Peng</a>
 * @since 2020-08-09
 */
@Slf4j
public class Client {

    public static void main(String[] args) {
        CheeseFactory factory = new CheeseFactory();
        List<Cheese> shopList = new ArrayList<>(100000);

        ExecutorService executorService = Executors.newFixedThreadPool(11);
        for (int i = 0; i < 10; i++) {
            executorService.submit(() -> {
                while (true) {
                    synchronized (shopList) {
                        if (shopList.size() == 100000) {
                            break;
                        }
                    }
                    factory.produce();
                }
            });
        }

        executorService.submit(() -> {
            while (true) {
                List<Cheese> list = factory.consume();
                if (list != null && list.size() == 100) {
                    synchronized (shopList) {
                        shopList.addAll(list);
                        if (shopList.size() == 100000) {
                            log.info("已经向商店运输 100000 份奶酪");
                            break;
                        }
                    }
                }
            }
        });

        executorService.shutdown();

        try {
            executorService.awaitTermination(30, TimeUnit.SECONDS);
            executorService.shutdownNow();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
