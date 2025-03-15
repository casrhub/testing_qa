package com.example.springboot_backend.dto;

public class MathResponse {
    private int result;

    // Default constructor (needed for JSON deserialization)
    public MathResponse() {
    }

    // Parameterized constructor
    public MathResponse(int result) {
        this.result = result;
    }

    // Getter
    public int getResult() {
        return result;
    }

    // Setter
    public void setResult(int result) {
        this.result = result;
    }
}
