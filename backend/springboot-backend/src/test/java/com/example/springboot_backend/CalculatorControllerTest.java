package com.example.springboot_backend;

import com.example.springboot_backend.dto.MathResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CalculatorControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testAdd() {
        ResponseEntity<MathResponse> response =
                restTemplate.getForEntity("/math/add?num1=5&num2=3", MathResponse.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(8, response.getBody().getResult());
    }

    @Test
    public void testSubtract() {
        ResponseEntity<MathResponse> response =
                restTemplate.getForEntity("/math/subtract?num1=5&num2=3", MathResponse.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2, response.getBody().getResult());
    }
}
