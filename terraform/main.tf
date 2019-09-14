
variable "google_root" { default = "d2cznr2f" }
#variable "ssh_public_key_path" { default = "~/.ssh/id_rsa.pub" }

variable "domain" { default	= "beltwaan.net" }
variable "dns_zone_name" { default = "beltwaan" }
variable "subdomain" { default = "dwarfgen" }


provider "google" {
	credentials	= "${file("~/.ssh/beltwaan-terraform.json")}"
	project		= "beltwaan"
	region		= "us-central1"
	zone		= "us-central1-c"
}


# register DNS name
resource "google_dns_record_set" "sub-beltwaan-net" {
	name = "${var.subdomain}.${var.domain}."
	type = "CNAME"
	ttl  = 300
	managed_zone = "${var.dns_zone_name}"
	rrdatas = ["c.storage.googleapis.com."]
}

# create bucket for DNS name
resource "google_storage_bucket" "wwwbucket" {
  name     = "${var.subdomain}.${var.domain}"
  location = "us-east1"
  storage_class = "REGIONAL"
  bucket_policy_only = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

# make bucket public
resource "google_storage_bucket_iam_binding" "binding" {
  bucket = "${var.subdomain}.${var.domain}"
  role        = "roles/storage.objectViewer"
  members = [ "allUsers" ]
}

# upload files -- one by one :(
resource "google_storage_bucket_object" "index" {
  name   = "index.html"
  source = "../www/index.html"
  bucket = "${var.subdomain}.${var.domain}"
}
resource "google_storage_bucket_object" "namegen" {
  name   = "namegen.js"
  source = "../www/namegen.js"
  bucket = "${var.subdomain}.${var.domain}"
}
resource "google_storage_bucket_object" "dwarf" {
  name   = "dwarf.js"
  source = "../www/dwarf.js"
  bucket = "${var.subdomain}.${var.domain}"
}

