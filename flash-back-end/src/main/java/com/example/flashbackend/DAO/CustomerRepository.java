package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Customer;
import com.example.flashbackend.Entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository< Customer , BigInteger > {

    @Override
    List<Customer> findAll();

    @Modifying
    @Query( value = "UPDATE customer SET FirstName = :firstName, LastName = :lastName, Gender = :gender, NIC = :nic, ContactNo = :contactNo WHERE CustomerID = :customerId", nativeQuery = true)
    @Transactional
    void updateCustomer(@Param("customerId") BigInteger customerId, @Param("firstName") String firstName, @Param("lastName") String lastName, @Param("gender") String gender, @Param("nic") String nic, @Param("contactNo") String contactNo);

    @Modifying
    @Query( value = "UPDATE customer SET CardNo = :cardNo, CVCNo = :cvcNo, ExpiaryDate = :expiaryDate, CardType = :cardType WHERE CustomerID = :customerId", nativeQuery = true)
    @Transactional
    void updateBank( @Param("cardNo") Integer cardNo, @Param("cvcNo") Integer cvcNo, @Param("expiaryDate") Date expiaryDate, @Param("cardType") String cardType);

//    @Override
//    Optional<Customer> findByCustomerID(1) ;
//    Customer findByLogin(Login login);

}
