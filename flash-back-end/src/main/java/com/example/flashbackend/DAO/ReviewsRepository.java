package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Reviews;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface ReviewsRepository extends CrudRepository<Reviews, BigInteger> {
}
