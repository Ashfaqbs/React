package com.example.sample_sb_web_service.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sample_sb_web_service.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
