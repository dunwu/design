package io.github.dunwu.pattern.adapter.square;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SquarePeg {

    private double width;

    public double getSquare() {
        double result;
        result = Math.pow(this.width, 2);
        return result;
    }

}
