
variable "google_root" { default = "d2cznr2f" }

variable "ssh_public_key_path" { default = "~/.ssh/id_rsa.pub" }

variable "domain" { default	= "beltwaan.net" }
variable "dns_zone_name" { default = "beltwaan" }


provider "google" {
	credentials	= "${file("~/.ssh/fergeteg-terraform.json")}"
	project		= "beltwaan"
	region		= "us-central1"
	zone		= "us-central1-c"
}


resource "google_dns_record_set" "sub-beltwaan-net" {
	name = "${var.vm_name}.${var.domain}."
	type = "A"
	ttl  = 300

	managed_zone = "${var.dns_zone_name}"

	rrdatas = ["194.38.107.101"]
}

