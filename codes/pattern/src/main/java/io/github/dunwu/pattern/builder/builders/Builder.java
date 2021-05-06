package io.github.dunwu.pattern.builder.builders;

import io.github.dunwu.pattern.builder.cars.CarType;
import io.github.dunwu.pattern.builder.components.Engine;
import io.github.dunwu.pattern.builder.components.GPSNavigator;
import io.github.dunwu.pattern.builder.components.Transmission;
import io.github.dunwu.pattern.builder.components.TripComputer;

public interface Builder {

    void setCarType(CarType type);

    void setSeats(int seats);

    void setEngine(Engine engine);

    void setTransmission(Transmission transmission);

    void setTripComputer(TripComputer tripComputer);

    void setGPSNavigator(GPSNavigator gpsNavigator);

}
