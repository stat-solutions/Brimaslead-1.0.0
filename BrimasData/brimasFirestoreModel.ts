
// -- -----------------------------------------------------
// -- Model  blimaslead

// -- Arrange company setup,continent,continental region,unit,business unit,unit region.

// -- user,user roles,next of kin, address,




/*==============PART ONE:COMPANY SETUP=============*/

// -- ---------------------------------------------------
//  Collection `the_company_details`
// -- -----------------------------------------------------
export interface theCompanyDetails {
  theCompanyDetailsName:string; //Brimas Media Ltd
  createdAt: Timestamp,
  updatedAt: Timestamp,
}


// -- ---------------------------------------------------
//  Collection `the_company_contacts`
// -- -----------------------------------------------------
export interface theCompanyContacts {
  phone1?:string;
  phone2?:string;
  phone3?:string;
  email1?:string;
  email2?:string;
  email3?:string;
  theCompanyDetails:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}



// -- ---------------------------------------------------
//  Collection `the_company_address`
// -- -----------------------------------------------------
export interface theCompanyAddress {
  officeFloor:string;
  streetBuilding:string;
  boxNumber:string;
  plotNumber:string;
  city:string;
  region:string;
  country:string;
  theCompanyDetails:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

// -- ---------------------------------------------------
//  Collection `Branch`
// -- -----------------------------------------------------
export interface branch {
  branchName:string;
  theCompanyDetails:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

// -- ---------------------------------------------------
//  Collection `Department`
// -- -----------------------------------------------------
export interface department {
  departmentName:string;
  branch:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

// -- ---------------------------------------------------
//  Collection `CountryCurrency`
// -- -----------------------------------------------------
export interface countryCurrency {
  countryCurrencyName:string;
  countryCurrencyId:string;
 countryCurrencySymbol:string;
 createdAt: Timestamp,
 updatedAt: Timestamp,
}


// -- ---------------------------------------------------
//  Collection `CountryCurrency`
// -- -----------------------------------------------------
export interface Gateway {
  gatewayName:string;
  countryCurrency:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

/*==============PART TWO:USER DETAILS SETUPS============*/

// -- ---------------------------------------------------
//  Collection `UserRole`
// -- -----------------------------------------------------
export interface UserRole {
  userRoleName:string;
  userRoleCategory:string;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}


// -- ---------------------------------------------------
//  Collection `user`
// -- -----------------------------------------------------
export interface user {
  user_contact:string;
  user_email:string;
  department:Reference;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

// -- ---------------------------------------------------
//  Collection `User`
// -- -----------------------------------------------------
export interface employeeDetails {
  employeeIdNumber:string;
  employeeJobTitle:string;
  userEmail:string;
  deparmentId:string;
  createdAt: Timestamp,
  updatedAt: Timestamp,
}



export interface rfqDetails {
  rfqRef:string;
  clientRef:string;
  totalItems:string;
  totalAmount:string;
  employeeRef: string,
  processingStatus: string,
  movementStatus: string,
  movementTime: string,
}


CREATE TABLE IF NOT EXISTS `employee_details` (

   `employee_job_title` VARCHAR(45) NULL,
  `employee_salry` DOUBLE,
    `leave_days_entitled` INT,
       `leave_days_taken` INT,
          `leave_days_remaining` INT,
    `employee_hire_date` TIMESTAMP,

  `fk_user_id_employee_details` INT(11) NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`employee_details_id`),

  CONSTRAINT `fk_user_id_employee_details`
    FOREIGN KEY (`fk_user_id_employee_details`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 100000000
DEFAULT CHARACTER SET = utf8;





-- -----------------------------------------------------
-- Table `next_of_kin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `next_of_kin` (
  `next_of_kin_id` INT(11) NOT NULL AUTO_INCREMENT,
  `relationship_with_user` VARCHAR(45) NULL DEFAULT 'Husband',
  `fk_user_id_next_of_kin` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`next_of_kin_id`),
  CONSTRAINT `fk_user_id_next_of_kin`
    FOREIGN KEY (`fk_user_id_next_of_kin`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 13000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_id_next_of_kin` ON `next_of_kin` (`fk_user_id_next_of_kin` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `document_identification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `document_identification` (
  `document_identification_id` INT(11) NOT NULL AUTO_INCREMENT,
  `document_type` VARCHAR(100) NULL DEFAULT NULL,
  `document_number` VARCHAR(100) NULL DEFAULT NULL,
  `identification_number` VARCHAR(100) NULL DEFAULT NULL,
  `insuance_date` TIMESTAMP NULL DEFAULT NULL,
  `expirely_date` TIMESTAMP NULL DEFAULT NULL,
  `issueing_authority` VARCHAR(200) NULL DEFAULT NULL,
  `fk_user_id_document_identification` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`document_identification_id`),
  CONSTRAINT `fk_user_id_document_identification`
    FOREIGN KEY (`fk_user_id_document_identification`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1000
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_user_id_document_identification_idx` ON `document_identification` (`fk_user_id_document_identification` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `images_path`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `images_path` (
  `images_path_id` INT(11) NOT NULL AUTO_INCREMENT,
  `images_path_actual_path` VARCHAR(100) NULL DEFAULT NULL,
  `image_name` VARCHAR(100) NULL DEFAULT NULL,
  `image_caption` VARCHAR(100) NULL DEFAULT NULL,
  `fk_user_id_images_path` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`images_path_id`),
  CONSTRAINT `fk_user_id_images_path`
    FOREIGN KEY (`fk_user_id_images_path`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 11000
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_user_id_images_path` ON `images_path` (`fk_user_id_images_path` ASC) VISIBLE;





-- ---------------------------------------------------
-- Table `common_bio_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_common_bio_data` (
  `user_common_bio_data_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT 'Augustine Bazirake Googo',
  `sex` VARCHAR(45) NULL DEFAULT 'Male',
  `date_of_birth` VARCHAR(45) NULL DEFAULT '1983-10-04',
  `fk_user_id_common_bio_data` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`user_common_bio_data_id`),
  CONSTRAINT `fk_user_id_common_bio_data`
    FOREIGN KEY (`fk_user_id_common_bio_data`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
  
ENGINE = InnoDB
AUTO_INCREMENT = 90
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_id_common_bio_data` ON `common_bio_data` (`fk_user_id_common_bio_data` ASC) VISIBLE;




-- ---------------------------------------------------
-- Table `contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_contacts` (
  `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
  `phone1` VARCHAR(100) NULL DEFAULT NULL,
  `phone2` VARCHAR(100) NULL DEFAULT NULL,
  -- `phone3` VARCHAR(100) NULL DEFAULT NULL,
  `email1` VARCHAR(100) NULL DEFAULT NULL,
  `email2` VARCHAR(100) NULL DEFAULT NULL,
  `fk_user_id_contacts` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`contact_id`),
  CONSTRAINT `fk_user_id_contacts`
  FOREIGN KEY (`fk_user_id_contacts`)
  REFERENCES `user`(`user_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION)

ENGINE = InnoDB
AUTO_INCREMENT = 200
DEFAULT CHARACTER SET = utf8;

CREATE INDEX fk_user_id_contacts_indx ON
`user_contacts`(`fk_user_id_contacts` ASC);



-- --------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `address` (
  `address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `box_number` VARCHAR(200) NULL DEFAULT NULL,
  `fk_user_id_ddress` INT(11) NULL DEFAULT NULL,
  `the_company_details_id_address` INT(11) NULL DEFAULT NULL,
  `fk_user_id_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`address_id`),

  CONSTRAINT `fk_user_id_address`
    FOREIGN KEY (`fk_user_id_address`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
KEY_BLOCK_SIZE = 1;


CREATE INDEX `fk_user_id_address` ON `address` (`fk_user_id_address` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `current_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `current_address` (
  `current_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `residance_status` VARCHAR(100) NULL DEFAULT NULL,
  `plot_number` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_current_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`current_address_id`),
  CONSTRAINT `address_id`
    FOREIGN KEY (`fk_address_id_current_address`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 800
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `address_id` ON `current_address` (`fk_address_id_current_address` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `home_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_address` (
  `home_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `place_of_birth` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_home_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`home_address_id`),
  CONSTRAINT `fk_address_id_home_address`
    FOREIGN KEY (`fk_address_id_home_address`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_home_address` ON `home_address` (`fk_address_id_home_address` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `city` (
  `city_id` INT(11) NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_city` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`city_id`),
  CONSTRAINT `fk_address_id_city`
    FOREIGN KEY (`fk_address_id_city`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_address_id_city_indx` ON `city` (`fk_address_id_city` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `town`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `town` (
  `town_id` INT(11) NOT NULL AUTO_INCREMENT,
  `town_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_town` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`town_id`),
  CONSTRAINT `fk_address_id_town`
    FOREIGN KEY (`fk_address_id_town`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_town_indx` ON `town` (`fk_address_id_town` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS  `customer`;

CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(200) NULL DEFAULT 'GoogoBazi',
  `customer_password` VARCHAR(500) NULL DEFAULT 'XXXXXX',
 `fk_user_id_created_by_customer` INT,
  `fk_user_id_first_approved_by_customer` INT,
  `fk_user_id_second_approved_by_customer` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`customer_id`),

  CONSTRAINT `fk_user_id_created_by_customer`
    FOREIGN KEY (`fk_user_id_created_by_customer`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
     CONSTRAINT `fk_user_id_first_approved_by_customer`
    FOREIGN KEY (`fk_user_id_first_approved_by_customer`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
      CONSTRAINT `fk_user_id_second_approved_by_customer`
    FOREIGN KEY (`fk_user_id_second_approved_by_customer`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    )
ENGINE = InnoDB
AUTO_INCREMENT = 100000000
DEFAULT CHARACTER SET = utf8;



-- ---------------------------------------------------
-- Table `customer_contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `customer_contacts` (
  `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
  `phone1` VARCHAR(100) NULL DEFAULT NULL,
  `phone2` VARCHAR(100) NULL DEFAULT NULL,
  `phone3` VARCHAR(100) NULL DEFAULT NULL,
  `email1` VARCHAR(100) NULL DEFAULT NULL,
  `email2` VARCHAR(100) NULL DEFAULT NULL,
  `fk_customer_id_contacts` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`contact_id`),
  CONSTRAINT `fk_customer_id_contacts`
  FOREIGN KEY (`fk_customer_id_contacts`)
  REFERENCES `customer`(`customer_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION)

ENGINE = InnoDB
AUTO_INCREMENT = 200
DEFAULT CHARACTER SET = utf8;





-- --------------------------------------------------
-- Table `customer_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `customer_address` (
  `customer_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `box_number` VARCHAR(200) NULL DEFAULT NULL,
  `plot_number` VARCHAR(200) NULL DEFAULT NULL,
  `city` VARCHAR(60) NULL DEFAULT NULL,
  `region` VARCHAR(60) NULL DEFAULT NULL,
  `country` VARCHAR(60) NULL DEFAULT NULL,
    `fk_customer_id_customer_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`customer_address_id`),
   CONSTRAINT `fk_customer_id_customer_address`
    FOREIGN KEY (`fk_customer_id_customer_address`)
    REFERENCES `customer` (`customer_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
KEY_BLOCK_SIZE = 1;



-- ---------------------------------------------------
-- Table `supplier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS  `supplier`;

CREATE TABLE IF NOT EXISTS `supplier` (
  `supplier_id` INT(11) NOT NULL AUTO_INCREMENT,
  `supplier_name` VARCHAR(200) NULL DEFAULT 'GoogoBazi',
  `supplier_password` VARCHAR(500) NULL DEFAULT 'XXXXXX',
 `fk_user_id_created_by_supplier` INT,
  `fk_user_id_first_approved_by_supplier` INT,
  `fk_user_id_second_approved_by_supplier` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`supplier_id`),

  CONSTRAINT `fk_user_id_created_by_supplier`
    FOREIGN KEY (`fk_user_id_created_by_supplier`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
     CONSTRAINT `fk_user_id_first_approved_by_supplier`
    FOREIGN KEY (`fk_user_id_first_approved_by_supplier`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
      CONSTRAINT `fk_user_id_second_approved_by_supplier`
    FOREIGN KEY (`fk_user_id_second_approved_by_supplier`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    )
ENGINE = InnoDB
AUTO_INCREMENT = 100000000
DEFAULT CHARACTER SET = utf8;



-- ---------------------------------------------------
-- Table `supplier_contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplier_contacts` (
  `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
  `phone1` VARCHAR(100) NULL DEFAULT NULL,
  `phone2` VARCHAR(100) NULL DEFAULT NULL,
  `phone3` VARCHAR(100) NULL DEFAULT NULL,
  `email1` VARCHAR(100) NULL DEFAULT NULL,
  `email2` VARCHAR(100) NULL DEFAULT NULL,
  `fk_supplier_id_contacts` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`contact_id`),
  CONSTRAINT `fk_supplier_id_contacts`
  FOREIGN KEY (`fk_supplier_id_contacts`)
  REFERENCES `supplier`(`supplier_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION)

ENGINE = InnoDB
AUTO_INCREMENT = 200
DEFAULT CHARACTER SET = utf8;





-- --------------------------------------------------
-- Table `supplier_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplier_address` (
  `supplier_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `box_number` VARCHAR(200) NULL DEFAULT NULL,
  `plot_number` VARCHAR(200) NULL DEFAULT NULL,
  `city` VARCHAR(60) NULL DEFAULT NULL,
  `region` VARCHAR(60) NULL DEFAULT NULL,
  `country` VARCHAR(60) NULL DEFAULT NULL,
    `fk_supplier_id_supplier_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`supplier_address_id`),
   CONSTRAINT `fk_supplier_id_supplier_address`
    FOREIGN KEY (`fk_supplier_id_supplier_address`)
    REFERENCES `supplier` (`supplier_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
KEY_BLOCK_SIZE = 1;
-- ---------------------------------------------------
-- Table `banks`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `banks` (
  `banks_id` INT(11) NOT NULL AUTO_INCREMENT,
  `banks_name` VARCHAR(100) NULL DEFAULT NULL,
  `banks_short_name` VARCHAR(45) NULL DEFAULT NULL,
  `banks_swift_code` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  `fk_banks_id_bank_details` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`banks_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 50
DEFAULT CHARACTER SET = utf8;



-- ---------------------------------------------------
-- Table `bank_details`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_details` (
  `bank_details_id` INT(11) NOT NULL AUTO_INCREMENT,
  `system_bank_account_number` VARCHAR(100) NULL DEFAULT NULL,
  `system_bank_name` VARCHAR(100) NULL DEFAULT NULL,
  `actual_bank_account_number` VARCHAR(100) NULL DEFAULT NULL,
  `actual_bank_account_name` VARCHAR(100) NULL DEFAULT NULL,
  `bank_branch_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_banks_id_bank_details` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`bank_details_id`),
  CONSTRAINT `fk_banks_id_bank_details`
    FOREIGN KEY (`fk_banks_id_bank_details`)
    REFERENCES `banks` (`banks_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_banks_id_bank_details` ON `bank_details` (`fk_banks_id_bank_details` ASC) VISIBLE;






/*==============PART 3: BLIMAS TRANSACTIONS=============*/


-- -----------------------------------------------------
-- Table `order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `order` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `order_no` VARCHAR(100) NULL,
   `order_stages` VARCHAR(100) NULL DEFAULT 'Quatation', -- Quotation,Job Costing, Job Order
  `order_amount` DOUBLE NULL,
  `order_description` TINYTEXT NULL,
  `order_status`  VARCHAR(100) NULL,
   `order_date` TIMESTAMP,
  `period_start_date` TIMESTAMP,
  `period_end_date` TIMESTAMP,
  `update_at` TIMESTAMP,
  `fk_request_for_quote_id_order` INT,
   `fk_user_id_created_by_order` INT,
  `fk_user_id_first_approved_by_order` INT,
  `fk_user_id_second_approved_by_order` INT,
  PRIMARY KEY (`order_id`),

  CONSTRAINT `fk_request_for_quote_id_order`
    FOREIGN KEY (`fk_request_for_quote_id_order`)
    REFERENCES `request_for_quote` (`request_for_quote_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
      CONSTRAINT `fk_user_id_created_by_order`
    FOREIGN KEY (`fk_user_id_created_by_order`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

        CONSTRAINT `fk_user_id_first_approved_by_order`
    FOREIGN KEY (`fk_user_id_first_approved_by_order`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

         CONSTRAINT `fk_user_id_second_approved_by_order`
    FOREIGN KEY (`fk_user_id_second_approved_by_order`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    
    )
ENGINE = InnoDB
AUTO_INCREMENT = 400
DEFAULT CHARACTER SET = utf8;



-- -----------------------------------------------------
-- Table `order_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `order_item` (
  `order_item_id` INT(11) NOT NULL AUTO_INCREMENT,
    `order_item_serial_number` VARCHAR(100) NULL,
  `order_item_size` VARCHAR(100) NULL,
   `order_item_cost` DOUBLE NULL,
  `order_item_description` TINYTEXT NULL,

  `fk_order_order_item`  INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  
  PRIMARY KEY (`order_item_id`),
  CONSTRAINT `fk_order_order_item`
    FOREIGN KEY (`fk_order_order_item`)
    REFERENCES `order` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 400
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `job_costing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `job_costing` (
  `job_costing_id` INT(11) NOT NULL AUTO_INCREMENT,
  `job_costing_ref` VARCHAR(100) NULL,
  `type_of_qoute`  VARCHAR(100) NULL,
 `parameter_for_cost`  VARCHAR(100) NULL,
  `considered_cost`  VARCHAR(100) NULL,
   `expected_margin`  VARCHAR(100) NULL,
   `job_cost_status`  VARCHAR(100) NULL,
    
      `fk_order_job_costing`  INT,
  `fk_user_id_created_by_job_costing` INT,
  `fk_user_id_first_approved_by_job_costing` INT,
  `fk_user_id_second_approved_by_job_costing` INT,
     `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`job_costing_id`),

    

       CONSTRAINT `fk_order_job_costing`
    FOREIGN KEY (`fk_order_job_costing`)
    REFERENCES `order` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    
      CONSTRAINT `fk_user_id_created_by_job_costing`
    FOREIGN KEY (`fk_user_id_created_by_job_costing`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

        CONSTRAINT `fk_user_id_first_approved_by_job_costing`
    FOREIGN KEY (`fk_user_id_first_approved_by_job_costing`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

         CONSTRAINT `fk_user_id_second_approved_by_job_costing`
    FOREIGN KEY (`fk_user_id_second_approved_by_job_costing`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    
    )
ENGINE = InnoDB
AUTO_INCREMENT = 400
DEFAULT CHARACTER SET = utf8;



-- -----------------------------------------------------
-- Table `request_for_quote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `request_for_quote` (
  `request_for_quote_id` INT(11) NOT NULL AUTO_INCREMENT,
    `request_for_quote_source` VARCHAR(100) NULL,
  `request_for_quote_type` VARCHAR(100) NULL,

  `fk_customer_id_request_for_quote` INT(11) NULL,
 `fk_user_id_created_by_request_for_quote` INT,
  `fk_user_id_first_approved_by_request_for_quote` INT,
  `fk_user_id_second_approved_by_request_for_quote` INT,
     `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`request_for_quote_id`),

       CONSTRAINT `fk_customer_id_request_for_quote`
    FOREIGN KEY (`fk_customer_id_request_for_quote`)
    REFERENCES `customer` (`customer_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    
      CONSTRAINT `fk_user_id_created_by_request_for_quote`
    FOREIGN KEY (`fk_user_id_created_by_request_for_quote`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

        CONSTRAINT `fk_user_id_first_approved_by_request_for_quote`
    FOREIGN KEY (`fk_user_id_first_approved_by_request_for_quote`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

         CONSTRAINT `fk_user_id_second_approved_by_request_for_quote`
    FOREIGN KEY (`fk_user_id_second_approved_by_request_for_quote`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    
    )
ENGINE = InnoDB
AUTO_INCREMENT = 700
DEFAULT CHARACTER SET = utf8;



-- -----------------------------------------------------
-- Table `pre_order_samples`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre_order_samples` (
  `pre_order_samples_id` INT(11) NOT NULL AUTO_INCREMENT,
  `sample_name` VARCHAR(100) NULL,
    `sample_description` VARCHAR(100) NULL,
  `fk_order_id_pre_order_samples` INT(11) NULL ,
  `fk_user_id_created_by_pre_order_samples` INT,
  `fk_user_id_first_approved_by_pre_order_samples` INT,
  `fk_user_id_second_approved_by_pre_order_samples` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`pre_order_samples_id`),

  CONSTRAINT `fk_order_id_pre_order_samples`
    FOREIGN KEY (`fk_order_id_pre_order_samples`)
    REFERENCES `orders` (`orders_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_user_id_created_by_pre_order_samples`
    FOREIGN KEY (`fk_user_id_created_by_pre_order_samples`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

        CONSTRAINT `fk_user_id_first_approved_by_pre_order_samples`
    FOREIGN KEY (`fk_user_id_first_approved_by_pre_order_samples`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

        CONSTRAINT `fk_user_id_second_approved_by_pre_order_samples`
    FOREIGN KEY (`fk_user_id_second_approved_by_pre_order_samples`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    
    
    )
ENGINE = InnoDB
AUTO_INCREMENT = 400
DEFAULT CHARACTER SET = utf8;



-- -----------------------------------------------------
-- Table `invoice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `invoice` (
  `invoice_id` INT(11) NOT NULL AUTO_INCREMENT,
  `invoice_no` VARCHAR(100) NULL,
   `invoice_terms_of_payment` VARCHAR(100) NULL,
  `invoice_date` TIMESTAMP,
  `period_start_date` TIMESTAMP,
  `period_end_date` TIMESTAMP,
  `invoice_status`  VARCHAR(100) NULL,
  `fk_order_id_invoice` INT(11) NULL ,
 `fk_user_id_created_by_Invoice` INT,
  `fk_user_id_first_approved_by_Invoice` INT,
  `fk_user_id_second_approved_by_Invoice` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`invoice_id`),
   CONSTRAINT `fk_user_id_created_by_invoice` 
  FOREIGN KEY (`fk_user_id_created_by_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_first_approved_by_invoice` 
  FOREIGN KEY (`fk_user_id_first_approved_by_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_second_approved_by_invoice` 
  FOREIGN KEY (`fk_user_id_second_approved_by_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=1000001 DEFAULT CHARSET=latin1;


-- -----------------------------------------------------
-- Table `invoice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preforma_invoice` (
  `preforma_invoice_id` INT(11) NOT NULL AUTO_INCREMENT,
  `preforma_invoice_no` VARCHAR(100) NULL,
  `preforma_invoice_date` TIMESTAMP,
  `period_start_date` TIMESTAMP,
  `period_end_date` TIMESTAMP,
  `preforma_invoice_status`  VARCHAR(100) NULL,
  `fk_order_id_invoice` INT(11) NULL ,
 `fk_user_id_created_by_preforma_invoice` INT,
  `fk_user_id_first_approved_by_preforma_invoice` INT,
  `fk_user_id_second_approved_by_preforma_invoice` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`preforma_invoice_id`),
   CONSTRAINT `fk_user_id_created_by_preforma_invoice` 
  FOREIGN KEY (`fk_user_id_created_by_preforma_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_first_approved_by_preforma_invoice` 
  FOREIGN KEY (`fk_user_id_first_approved_by_preforma_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_second_approved_by_preforma_invoice` 
  FOREIGN KEY (`fk_user_id_second_approved_by_preforma_invoice`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=1000001 DEFAULT CHARSET=latin1;

-- -----------------------------------------------------
-- Table `stock`
-- -----------------------------------------------------
CREATE TABLE `stock` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_category` varchar(100) DEFAULT '0',
  `product_subcategory` varchar(100) DEFAULT '0',
  `product_brand` varchar(100) DEFAULT '0',
  `product_serial_number` varchar(100) DEFAULT '0',
  `bar_code` varchar(100) DEFAULT '0',
  `product_name` varchar(100) DEFAULT '0',
  `number_of_stock_items` varchar(100) DEFAULT '0',
  `items_used` varchar(100) DEFAULT '0',
  `items_remaining` varchar(100) DEFAULT '0',
  `retail_cost_price` varchar(100) DEFAULT '0',
  `retail_selling_price` varchar(100) DEFAULT '0',
  `purchase_date` TIMESTAMP,
  `manufacture_date` TIMESTAMP,
  `expirely_date` TIMESTAMP,
   `fk_user_id_created_by_stock` INT,
  `fk_user_id_first_approved_by_stock` INT,
  `fk_user_id_second_approved_by_stock` INT,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`stock_id`),
   CONSTRAINT `fk_user_id_created_by_stock` 
  FOREIGN KEY (`fk_user_id_created_by_stock`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_first_approved_by_stock` 
  FOREIGN KEY (`fk_user_id_first_approved_by_stock`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION,

     CONSTRAINT `fk_user_id_second_approved_by_stock` 
  FOREIGN KEY (`fk_user_id_second_approved_by_stock`) 
  REFERENCES `user`(`user_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=1000001 DEFAULT CHARSET=latin1;




-- ---------------------------------------------------
-- Table `gate_way_transactions`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `gate_way_transactions` (
  
  `gate_way_transactions_id` INT(11) NOT NULL AUTO_INCREMENT,
  `transaction_date` DATETIME NULL DEFAULT NULL,
  `amount_transacted` VARCHAR(45) NULL DEFAULT NULL,
  `txn_ref_number` VARCHAR(45) NULL DEFAULT NULL,
   `txn_ref_message` VARCHAR(45) NULL DEFAULT NULL,
  `source_name` VARCHAR(45) NULL DEFAULT NULL,
  `txn_status` VARCHAR(45) NULL DEFAULT NULL,
  `fk_gate_way_id_gate_way_transactions` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`gate_way_transactions_id`),
  CONSTRAINT `fk_gate_way_id_gate_way_transactions`
    FOREIGN KEY (`fk_gate_way_id_gate_way_transactions`)
    REFERENCES `gate_way` (`gate_way_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_gate_way_id_gate_way_transactions` ON `gate_way_transactions` (`fk_gate_way_id_gate_way_transactions` ASC) VISIBLE;





-- -----------------------------------------------------
-- Table `currencies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `currencies` (
  `currencies_id` INT NOT NULL AUTO_INCREMENT,
  `currencies_country_region` VARCHAR(100) NULL,
  `currencies_name` VARCHAR(100) NULL,
  `currencies_alphabetic_code` VARCHAR(45) NULL,
  `currencies_numeric_code` VARCHAR(45) NULL,
  `currencies_minor_unit` INT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`currencies_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9000;



-- -----------------------------------------------------
-- Table `sms_management` a table holding the counter for the SMSs that the company has bought
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sms_management` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_of_sms` INT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1;







/*==============PART 5: GENERAL LEDGER=============*/


-- -----------------------------------------------------
-- Table `accounts_created_store`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `accounts_created_store`;

CREATE TABLE IF NOT EXISTS `accounts_created_store` (
  `accounts_created_store_id` INT NOT NULL AUTO_INCREMENT,
  `account_creation_date` TIMESTAMP NULL,
  `account_type` VARCHAR(45) NULL,--  Control,Item,ControlItem
  `account_name` VARCHAR(45) NULL,
  `account_number` VARCHAR(45) NULL,
  `account_cat_4` VARCHAR(45) NULL, -- Debit OR Credit
  `account_cat_3` VARCHAR(45) NULL,-- Asset,Liability,Equity,Expense OR Revenue
  `account_cat_2` VARCHAR(45) NULL,--  Current_Assets etc
  `account_cat_1` VARCHAR(45) NULL,--  Cash And Cash Equivalents
  `account_status` VARCHAR(45) NULL,--  Created,First_Approved,Second_approved,Active,Dormant,Closed
  `fk_user_id_created_by_accounts_created_store` INT,
  `fk_user_id_first_approved_by_accounts_created_store` INT,
  `fk_user_id_second_approved_by_accounts_created_store` INT,
  `update_at` TIMESTAMP NULL,
  PRIMARY KEY (`accounts_created_store_id`),

  CONSTRAINT `fk_user_id_created_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_created_by_accounts_created_store`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_user_id_first_approved_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_first_approved_by_accounts_created_store`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
    CONSTRAINT `fk_user_id_second_approved_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_second_approved_by_accounts_created_store`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_user_id_created_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_created_by_accounts_created_store` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_first_approved_by_accounts_created_store` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_second_approved_by_accounts_created_store` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `balance_per_day`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `balance_per_day`;

CREATE TABLE IF NOT EXISTS `balance_per_day` (
  `balances_per_day_id` INT NOT NULL AUTO_INCREMENT,
  `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
  `account_number` VARCHAR(45) NULL,
  `account_name` VARCHAR(45) NULL,
  `balance` VARCHAR(45) NULL,
  `fk_general_ledger_id_balance_per_day` INT NULL,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`balances_per_day_id`),
  CONSTRAINT `fk_general_ledger_id_balance_per_day`
  FOREIGN KEY (`fk_general_ledger_id_balance_per_day`)
  REFERENCES  `general_ledger`(`general_ledger_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION
  )
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_general_ledger_id_balance_per_day_idx` ON `balance_per_day` (`fk_general_ledger_id_balance_per_day` ASC) VISIBLE;




-- -----------------------------------------------------
-- Table `balance_per_account`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `balance_per_account`;

CREATE TABLE IF NOT EXISTS `balance_per_account` (
  `balance_per_account_id` INT NOT NULL AUTO_INCREMENT,
  `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
  `account_number` VARCHAR(45) NULL,
  `account_name` VARCHAR(45) NULL,
  `balance` VARCHAR(45) NULL,
  `fk_general_ledger_id_balance_per_account` INT NULL,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`balance_per_account_id`),
  CONSTRAINT `fk_general_ledger_id_balance_per_account`
  FOREIGN KEY (`fk_general_ledger_id_balance_per_account`)
  REFERENCES  `general_ledger`(`general_ledger_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION
  )
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_general_ledger_id_balance_per_day_idx` ON `balance_per_account` (`fk_general_ledger_id_balance_per_account` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `general_ledger`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `general_ledger` (
  `general_ledger_id` INT NOT NULL,--  The unique identifier for each transaction. Will be the table Primary key
   `trn_ref` INT NULL,--  (Ref auto transact registration)System generated code for auto posting from the banking or mobile money systems
   `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
    `narration` VARCHAR(500) NULL,--  Notes appended to the transaction for more clarity. Should not exceed 500 characters
    `debit_amount` VARCHAR(45) NULL,--  Debit amount(Dr), for debit transactions
    `dr_amnt_default_cy_equiv` VARCHAR(45) NULL,--  debit amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
       `credit_amount` VARCHAR(45) NULL,--  credit amount
  `cr_amnt_default_cy_equiv` VARCHAR(45) NULL,--  credit amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
  `running_bal` VARCHAR(45) NULL,--  for query items, the balances
   `bal_amnt_default_cy_equiv` VARCHAR(45) NULL,--  balance amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
     `dr_cr_code` VARCHAR(45) NULL,--  Debit or credit transaction type identifier
       `trn_family_code` VARCHAR(45) NULL,--  identifier for transactions in the same family. for example, dr cash, cr supplier both legs will have the same id.
         `trn_type_code` VARCHAR(45) NULL,--  system standard transactions identifier. such as payments, savings, loan payments etc.
           `batch_code` VARCHAR(45) NULL,--  transactions will be batched. a batch may have different transaction types and family.
  `fk_user_id_created_by_general_ledger` INT,
  `fk_user_id_first_approved_by_general_ledger` INT,
  `fk_user_id_second_approved_by_general_ledger` INT,

`fk_currencies_id_general_ledger` INT NULL,
`fk_accounts_created_store_id_general_ledger`INT NULL,
  PRIMARY KEY (`general_ledger_id`) ,

  CONSTRAINT `fk_currencies_id_general_ledger`
    FOREIGN KEY (`fk_currencies_id_general_ledger`)
    REFERENCES `currencies` (`currencies_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT `fk_user_id_created_by_general_ledger`
    FOREIGN KEY (`fk_user_id_created_by_general_ledger`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_user_id_first_approved_by_general_ledger`
    FOREIGN KEY (`fk_user_id_first_approved_by_general_ledger`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

       CONSTRAINT `fk_user_id_second_approved_by_general_ledger`
    FOREIGN KEY (`fk_user_id_second_approved_by_general_ledger`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

     CONSTRAINT `fk_accounts_created_store_id_general_ledger`
    FOREIGN KEY (`fk_accounts_created_store_id_general_ledger`)
    REFERENCES `accounts_created_store` (`accounts_created_store_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_currencies_id_general_ledger_idx` ON `general_ledger` (`fk_currencies_id_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_accounts_created_store_id_general_ledger_idx` ON `general_ledger` (`fk_accounts_created_store_id_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_created_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_created_by_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_first_approved_by_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_second_approved_by_general_ledger` ASC) VISIBLE;




-- -----------------------------------------------------
-- This is the template upon which account numbers are generated for each specific account type 
-- Table `accounts_generators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `accounts_generators` (
  `template_assets` INT NULL DEFAULT 1000000,
  `template_expenses` INT NULL DEFAULT 2000000,
  `template_revenues` INT NULL DEFAULT 3000000,
  `template_equity` INT NULL DEFAULT 4000000,
   `template_liabilities` INT NULL DEFAULT 5000000
  )
ENGINE=InnoDB  DEFAULT CHARSET=latin1;


-- -----------------------------------------------------
-- `datesforsystem`
-- -----------------------------------------------------

CREATE TABLE `posting_date` (
  `posting_date_id` int(11) NOT NULL AUTO_INCREMENT,
  `posting_date` date NOT NULL DEFAULT '1970-01-01 00:00:00',
    `post_date_status` VARCHAR(45) NULL,--  Initiated,First_Approved,Second_approved,Changed,
  `fk_user_id_created_by_posting_date` INT,
  `fk_user_id_first_approved_by_posting_date` INT,
  `fk_user_id_second_approved_by_posting_date` INT,

  PRIMARY KEY (`posting_date_id`),

 CONSTRAINT `fk_user_id_created_by_posting_date`
 FOREIGN KEY (`fk_user_id_created_by_posting_date`)
 REFERENCES `user`(`user_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION,

  CONSTRAINT `fk_user_id_first_approved_by_posting_date`
 FOREIGN KEY (`fk_user_id_first_approved_by_posting_date`)
 REFERENCES `user`(`user_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION,


   CONSTRAINT `fk_user_id_second_approved_by_posting_date`
 FOREIGN KEY (`fk_user_id_second_approved_by_posting_date`)
 REFERENCES `user`(`user_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION


) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_posting_date_idx` ON `posting_date` (`fk_user_id_created_by_posting_date` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_posting_date_idx` ON `posting_date` (`fk_user_id_first_approved_by_posting_date` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_posting_date_idx` ON `posting_date` (`fk_user_id_second_approved_by_posting_date` ASC) VISIBLE;


DROP TABLE IF EXISTS `trn_process`;

CREATE TABLE `trn_process` (
  `trn_process_id` int(11) NOT NULL AUTO_INCREMENT,
  `dr_account_name` varchar(100) DEFAULT '0',
  `dr_account_number` varchar(100) DEFAULT '0',
  `cr_account_name` varchar(100) DEFAULT '0',
  `cr_account_number`  varchar(100) DEFAULT '0',
  `trn_process_status` VARCHAR(45) NULL,--  Created,First_Approved,Second_approved,Active,Dormant,Closed
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
    `fk_trn_type_id_trn_process` INT,
  `fk_user_id_created_by_trn_process` INT,
  `fk_user_id_first_approved_by_trn_process` INT,
  `fk_user_id_second_approved_by_trn_process` INT,
  PRIMARY KEY (`trn_process_id`),

  CONSTRAINT `fk_trn_type_id_trn_process`
  FOREIGN KEY (`fk_trn_type_id_trn_process`)
  REFERENCES  `trn_type`(`trn_type_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_created_by_trn_process`
  FOREIGN KEY (`fk_user_id_created_by_trn_process`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_trn_process`
  FOREIGN KEY (`fk_user_id_first_approved_by_trn_process`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_trn_process`
  FOREIGN KEY (`fk_user_id_second_approved_by_trn_process`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE

) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_trn_type_id_trn_process_indx` ON `trn_process`(`fk_trn_type_id_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_created_by_trn_process_indx` ON `trn_process`(`fk_user_id_created_by_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_trn_process_indx` ON `trn_process`(`fk_user_id_first_approved_by_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_trn_process_indx` ON `trn_process`(`fk_user_id_second_approved_by_trn_process` ASC) VISIBLE;

--  -----------------------------------------------------
/*  `trn_type` 

This will be a list of all acceptable transactions types.

 These types should have their behaviour hardcoded. 

 The process should be only created on a transaction type.This means transaction processes belonging to the same transaction type will have the same behavior.

 However the transaction process can be domarnt without necessariry affecting the transaction type.

 The transaction type will be hardcorded but it should be able to be to vary it's status, such as activated,dormanted, closed etc
 
  */
--  ----------------------------------------------------------------
CREATE TABLE `trn_type` (
  `trn_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `trn_type_name` varchar(100) DEFAULT '0',-- should hava a max of 100 characters camel case expenseCash=100,expenseBank=101
  `trn_type_code` INT,--  Ranges from 100-999
  `trn_type_discription` VARCHAR(300) DEFAULT '0',
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
   `fk_user_id_created_by_trn_type` INT,
  `fk_user_id_first_approved_by_trn_type` INT,
  `fk_user_id_second_approved_by_trn_type` INT,
  PRIMARY KEY (`trn_type_id`),
  
   CONSTRAINT `fk_user_id_created_by_trn_type`
  FOREIGN KEY (`fk_user_id_created_by_trn_type`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_trn_type`
  FOREIGN KEY (`fk_user_id_first_approved_by_trn_type`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_trn_type`
  FOREIGN KEY (`fk_user_id_second_approved_by_trn_type`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_trn_type_indx` ON `trn_type`(`fk_user_id_created_by_trn_type` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_trn_type_indx` ON `trn_type`(`fk_user_id_first_approved_by_trn_type` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_trn_type_indx` ON `trn_type`(`fk_user_id_second_approved_by_trn_type` ASC) VISIBLE;




DROP TABLE IF EXISTS `systemids`;

CREATE TABLE `systemids` (
  `SyIdA1` int(11) DEFAULT '2',-- Account status flag, 1=Requires approval,2=does not require approval
  `SyIdA2` int(11) DEFAULT '10',
  `SyIdA3` int(11) DEFAULT '100',
  `SyIdA4` int(11) DEFAULT '1000',
  `SyIdA5` int(11) DEFAULT '10000',
  `SyIdA6` int(11) DEFAULT '20000',
  `SyIdA7` int(11) DEFAULT '70000',
  `SyIdA8` int(11) DEFAULT '80000',
  `SyIdA9` int(11) DEFAULT '90000',
  `SyIdA10` int(11) DEFAULT '100000',
  `SyIdA11` int(11) DEFAULT '110000',
  `SyIdA12` int(11) DEFAULT '120000',
  `SyIdA13` int(11) DEFAULT '130000',
  `SyIdA14` int(11) DEFAULT '140000',
  `OtherThree` varchar(45) DEFAULT 'NCO',
  `OtherFour` varchar(45) DEFAULT 'NCO',
  `OtherFive` varchar(45) DEFAULT 'NCO'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* The concept of special accounts applies from the fact that for some accounts like CASH appear recurrent, however during the creation of accounts, there is no determination of whether it is cash or bank as long as it belongs to assets, to hard code some processes we need a way to designate certain accounts like CASH so that it is associated later*/

DROP TABLE IF EXISTS `special_account_setups`;
CREATE TABLE `special_account_setups` (
  `special_account_setups_id` int(11) NOT NULL AUTO_INCREMENT,
  `special_account_setups_name` varchar(100) DEFAULT '0',--  CASH,BANK
  `account_name` varchar(300) DEFAULT '0',
  `accout_number` varchar(300) DEFAULT '0',
  `created_at` TIMESTAMP,
   `fk_user_id_created_by_special_account_setups` INT,
  `fk_user_id_first_approved_by_special_account_setups` INT,
  `fk_user_id_second_approved_by_special_account_setups` INT,
  
  PRIMARY KEY (`special_account_setups_id`),

  
   CONSTRAINT `fk_user_id_created_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_created_by_special_account_setups`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_first_approved_by_special_account_setups`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_second_approved_by_special_account_setups`)
  REFERENCES  `user`(`user_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE)

ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_created_by_special_account_setups` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_first_approved_by_special_account_setups` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_second_approved_by_special_account_setups` ASC) VISIBLE;

--   ---------------------------------------------------------------------
--  budget
--  -------------------------------------------------------------------------

CREATE TABLE `budget_store` (
  `budget_store_id` int(11) NOT NULL AUTO_INCREMENT,
  `budget_store_date` date NOT NULL DEFAULT '1970-01-01',
  `account_type` varchar(100) NOT NULL DEFAULT 'Expense Account',
  `account_name` varchar(100) NOT NULL DEFAULT 'Bad Debts Written Off',
  `budget_year` int(11) DEFAULT '2017',
  `budget_monthWord` varchar(100) NOT NULL DEFAULT 'January',
  `budget_monthFigure` int(11) DEFAULT '1',
  `budgeted_amount` varchar(100) NOT NULL DEFAULT '0.0',
  `actual_amount` varchar(100) NOT NULL DEFAULT '0.0',
  PRIMARY KEY (`budget_store_id`),
  `fk_general_ledger_id_budget_store` INT NULL,
  CONSTRAINT  `fk_general_ledger_id_budget_store`
  FOREIGN KEY  (`fk_general_ledger_id_budget_store`)
  REFERENCES `general_ledger`(`general_ledger_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE INDEX `fk_general_ledger_id_budget_store_indx` ON budget_store
(`fk_general_ledger_id_budget_store` ASC) VISIBLE;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
