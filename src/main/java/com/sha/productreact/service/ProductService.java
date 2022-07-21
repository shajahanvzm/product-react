package com.sha.productreact.service;

import com.sha.productreact.entity.Product;
import com.sha.productreact.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    public Product update(long id, Product product){
        return productRepository.save(product);
    }

    public Product findById(long id){
      Optional<Product> product =  productRepository.findById(id);
      return product.get();
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public void deleteById(long id){
        productRepository.deleteById(id);
    }
}
