import React from "react";
import { render, cleanup } from "../../setupTests";

import InfoBox from "../InfoBox/InfoBox";

const mockResponse = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100,
    total: 1669022,
  },
  data: [
    {
      flight_date: "2019-12-12",
      flight_status: "active",
      departure: {
        airport: "San Francisco International",
        timezone: "America/Los_Angeles",
        iata: "SFO",
        icao: "KSFO",
        terminal: "2",
        gate: "D11",
        delay: 13,
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "2019-12-12T04:20:00+00:00",
        actual: "2019-12-12T04:20:13+00:00",
        estimated_runway: "2019-12-12T04:20:13+00:00",
        actual_runway: "2019-12-12T04:20:13+00:00",
      },
      arrival: {
        airport: "Dallas/Fort Worth International",
        timezone: "America/Chicago",
        iata: "DFW",
        icao: "KDFW",
        terminal: "A",
        gate: "A22",
        baggage: "A17",
        delay: 0,
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "2019-12-12T04:20:00+00:00",
        actual: null,
        estimated_runway: null,
        actual_runway: null,
      },
      airline: {
        name: "American Airlines",
        iata: "AA",
        icao: "AAL",
      },
      flight: {
        number: "1004",
        iata: "AA1004",
        icao: "AAL1004",
        codeshared: null,
      },
      aircraft: {
        registration: "N160AN",
        iata: "A321",
        icao: "A321",
        icao24: "A0F1BB",
      },
      live: {
        updated: "2019-12-12T10:00:00+00:00",
        latitude: 36.2856,
        longitude: -106.807,
        altitude: 8846.82,
        direction: 114.34,
        speed_horizontal: 894.348,
        speed_vertical: 1.188,
        is_ground: false,
      },
    },
  ],
};

afterEach(cleanup);

test("InfoBox is rendered", () => {
  const { container } = render(<InfoBox response={mockResponse.data[0]} />);

  expect(container).toBeInTheDocument();
});

describe("InfoBox displays data", () => {
  test("should show the flight designator", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);

    expect(container).toHaveTextContent(/AA1004/);
  });
  test("should show flight status", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Airborne/);
  });
  test("should show current location ", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Latitude: 36.2856/);
    expect(container).toHaveTextContent(/Longitude: -106.807/);
  });

  test("should show altitude", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Altitude: 8846.82/);
  });
  test("should show speed", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Horizontal: 894.348/);
    expect(container).toHaveTextContent(/Vertical: 1.188/);
  });
  test("should show direction", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Direction: 114.34/);
  });
  test("should show departure time", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(
      /ScheduledDecember 12, 2019, 4:20 AM CST/
    );
  });
  test("should show departure airport", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/SFO/);
  });
  test("should show gate", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Gate:/);
  });
  test("should show terminal", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(/Terminal:/);
  });
  test("should show arrival time", () => {
    const { container } = render(<InfoBox response={mockResponse.data[0]} />);
    expect(container).toHaveTextContent(
      /ScheduledDecember 12, 2019, 4:20 AM CST/
    );
  });
});
