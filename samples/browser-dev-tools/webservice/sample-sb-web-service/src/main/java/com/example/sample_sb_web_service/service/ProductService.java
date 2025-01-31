package com.example.sample_sb_web_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.sample_sb_web_service.entity.Product;
import com.example.sample_sb_web_service.repo.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Product save(Product product) {
        return repository.save(product);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
