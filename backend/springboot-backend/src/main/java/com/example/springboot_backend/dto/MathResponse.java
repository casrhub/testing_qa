package com.example.springboot_backend.dto;

public class MathResponse {
    private int result;

    public MathResponse(int result) {
        this.result = result;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }
}