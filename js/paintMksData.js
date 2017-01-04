/**
 * Created by Shahar on 03/01/2017.
 */

$(document).ready(function () {
   function paintMkDetails() {
       var img = document.createElement("img");
       var mkName = document.createElement("div");
       var emailAdd = document.createElement("div");
       var currentPos = document.createElement("div");
       var currentparty = document.createElement("div");
       var mkBirthDate = document.createElement("div");
       var mkStartFrom = document.createElement("div");
       var mkJobs = document.createElement("div");
       var mkCommities = document.createElement("div");
       var mkFacebook = document.createElement("div");

       img.setAttribute("img");
       mkName.setAttribute("id", "mkName");
       emailAdd.setAttribute("id", "emailId");
       currentPos.setAttribute("id", "pos");
       currentparty.setAttribute("id", "party");
       mkBirthDate.setAttribute("id", "birth");
       mkStartFrom.setAttribute("id", "startDate");
       mkJobs.setAttribute("id", "mkJob");
       mkCommities.setAttribute("id", "committee");
       mkFacebook.setAttribute("id", "mkFace");
   }
});