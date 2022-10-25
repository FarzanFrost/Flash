package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.AddPackages;
import com.example.flashbackend.DTO.EditPackages;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.util.List;

@Component
public class ManagerComponent {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PackageRepository packageRepository;

    @Autowired
    ReviewsRepository reviewsRepository;

    @Autowired
    LoginRepository loginRepository;

    public long getEmployeeCount(){

        return employeeRepository.count();

    }

    public long getEventCount(){

        return eventRepository.count();

    }

    public long getCustomerCount(){

        return customerRepository.count();

    }

    public List<Package> getPackages(){

        return packageRepository.findAll();

    }

    public List<Event> getEvents(){

        return eventRepository.findAll();

    }

    public List<Employee> getEmployees(){

        return employeeRepository.findAll();

    }

    public List<Reviews> getReviews(){

        return reviewsRepository.findAll();

    }

    public String addNewEmployee(Employee employee , Login login){

        employeeRepository.save( employee );

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        String encodedPassword = bCryptPasswordEncoder.encode( login.getPassword() );

        loginRepository.insertIntoLogin(login.getEmail(), encodedPassword , login.getSaltkey(), null , employee.getEmployeeID() , login.getDateTime());

        return "done";
    }

    public String deleteReview(BigInteger reviewId ){

        reviewsRepository.deleteById( reviewId );
        return "done";
    }

    public String addPackage( AddPackages addPackages ){

        Package aPackage = new Package( addPackages.getFrame() , addPackages.getVideographer() , addPackages.getPhotographer() , addPackages.isCalender() , addPackages.getName() , addPackages.getPages() , addPackages.getExtraPagesPrice() , addPackages.getOutShootType() , addPackages.isSignatureFrame() , addPackages.getAlbumDesign() , addPackages.getTotalPayment() , addPackages.getEventType() , addPackages.getAdditional() );
        packageRepository.save( aPackage );

        return "done";

    }

    public String deleteEmployee( BigInteger employeeId ){

        employeeRepository.deleteById( employeeId );
        return "done";

    }

    public String editPackage(EditPackages editPackages){

        packageRepository.update( editPackages.getFrame() , editPackages.getVideographer() , editPackages.getPhotographer(), editPackages.isCalender(), editPackages.getName() , editPackages.getPages(), editPackages.getExtraPagesPrice(), editPackages.getOutShootType() , editPackages.isSignatureFrame(), editPackages.getAlbumDesign() , editPackages.getTotalPayment() , editPackages.getEventType() , editPackages.getAdditional() , editPackages.getPackageID() );
        return "done";

    }

}
