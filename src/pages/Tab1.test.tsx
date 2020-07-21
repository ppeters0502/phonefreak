import React from "react";
import { render } from "@testing-library/react";
import Tab1 from "./Tab1";

test("Page title is Task Manager", async () => {
    const { findByText } = render(<Tab1 />);
    await findByText("Task Manager");
});

test("When there are no Tasks, inform the user that no tasks have been created", async() => {
    const { findByText } = render(<Tab1 />);
    await findByText("You have yet to add tasks for today");
});
