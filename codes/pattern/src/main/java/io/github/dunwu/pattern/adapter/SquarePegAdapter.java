package io.github.dunwu.pattern.adapter;

import io.github.dunwu.pattern.adapter.round.RoundPeg;
import io.github.dunwu.pattern.adapter.square.SquarePeg;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SquarePegAdapter extends RoundPeg {

    private SquarePeg peg;

    @Override
    public double getRadius() {
        double result;
        // Calculate a minimum circle radius, which can fit this peg.
        result = (Math.sqrt(Math.pow((peg.getWidth() / 2), 2) * 2));
        return result;
    }

}
