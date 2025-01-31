package com.example.sample_sb_web_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ExtraController {

    @GetMapping("/greeting")
    public String getGreeting() {
        return "Hello, Developer!";
    }

    @GetMapping("/param")
    public String getByRequestParam(@RequestParam String name) {
        return "Received Param: " + name;
    }

    @GetMapping("/header")
    public String getByHeader(@RequestHeader("User-Agent") String userAgent) {
        return "User-Agent: " + userAgent;
    }

    @GetMapping("/path/{id}")
    public String getByPathVariable(@PathVariable String id) {
        return "Path Variable ID: " + id;
    }

    @GetMapping("/metadata")
    public ResponseEntity<String> getMetadata() {
        return ResponseEntity.ok()
                .header("Cache-Control", "max-age=3000")
                .header("Custom-Header", "DeveloperToolsTest")
                .body("Metadata response with headers.");
    }
}
