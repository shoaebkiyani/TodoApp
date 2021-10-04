import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import AddTodos from "./AddTodos";

const mockedAddTodo = jest.fn();

describe("AddTodos", () => {
  afterEach(() => {
    cleanup();
  });

  it("should check placeholder in the input element", () => {
    render(<AddTodos todo={[]} addTodo={mockedAddTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add new Todo/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render on input change", () => {
    render(<AddTodos todo={[]} addTodo={mockedAddTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add new Todo/i);
    fireEvent.change(inputElement, { target: { value: "Call to Bob" } });
    expect(inputElement.value).toBe("Call to Bob");
  });

  it("should empty the input element after Add", async () => {
    render(<AddTodos todos={[]} addTodo={mockedAddTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add new Todo/i);
    const buttonElement = await screen.findByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Call to Bob" } });
    expect(inputElement.value).toBe("Call to Bob");
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });

  it("contains the text on the button", () => {
    render(<AddTodos />);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    expect(buttonElement.innerHTML).toBe("Add");
  });

  it("should render button's status", async () => {
    render(<AddTodos />);
    const button = await screen.findByRole("button", { name: /Add/i });
    expect(button).toBeEnabled();
  });
});
