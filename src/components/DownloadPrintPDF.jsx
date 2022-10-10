import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const doc = jsPDF({ format: "a4" });

const DownloadPrintPDF = () => {
  // Function to generate PDF With True or False parameter.
  // For Print: False.
  // For Download: True.
  const GeneratePdf = (printDownload) => {
    // Convert HTML Page into Image format.
    html2canvas(document.getElementById("print"), {
      allowTaint: true,
      useCORS: true,
      windowWidth: Window.innerWidth,
      scale: 1,
      width: 1500,
    }).then((canvas) => {
      // Create PDF of image which is recieved from html2canvas.

      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF({ format: "a4" });

      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm", "a4");
      var position = 0;

      doc.addImage(img, "PNG", 0, position + 2, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(img, "PNG", 0, position + 2, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      if (printDownload) {
        // PDF Download Function
        doc.save("Invoice_10");
      } else {
        // PDF Print Function
        doc.autoPrint();
        window.open(doc.output("bloburl"), "_blank");
      }
    });
  };

  return (
    <>
      <div>
        {/* HTML Code That we want to Download/Print as PDF */}
        <div id="print">
          <div style={{ padding: "1rem", width: "1450px" }}>
            <table
              cellSpacing={0}
              style={{ width: "1450px", fontSize: "20px" }}
            >
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    style={{
                      textAlign: "left",
                      width: "33%",
                      borderTop: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      paddingTop: "0px",
                      paddingBottom: "15px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>GSTIN</b>: DKGHBD1547ZGVF1
                  </th>
                  <th
                    colSpan={2}
                    style={{
                      textAlign: "center",
                      fontSize: "2rem",
                      color: "#ebebeb",
                      borderTop: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      paddingBottom: "20px",
                      paddingTop: "0px",
                    }}
                  >
                    <b>TAX INVOICE</b>
                  </th>
                  <th
                    colSpan={2}
                    style={{
                      textAlign: "right",
                      borderTop: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      paddingTop: "0px",
                      paddingBottom: "15px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>ORIGINAL FOR RECIPIENT</b>
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      textAlign: "center",
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      padding: "0px 10px 20px 10px",
                    }}
                  >
                    <b>Customer Detail</b>
                  </td>
                  <td style={{ paddingLeft: "20px" }}>Invoice No.</td>
                  <td>
                    <b>ID0025S6</b>
                  </td>
                  <td>Invoice Date</td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}>
                    10-10-2022
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    M/S
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      borderRight: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    Google
                  </th>
                  <td style={{ paddingLeft: "20px" }}>Invoice for the Month</td>
                  <td>October</td>
                  <td>Due Date</td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}>
                    15-10-2022
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    <b>Address</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    Flat 12, your house, Apartment, city, disctrict, state, 411
                    111.
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}></td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    <b>PHONE</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    +91 9876543210
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}></td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    <b>GSTIN</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      padding: "10px",
                    }}
                  >
                    DKGkj25651511Xo
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}></td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      padding: "10px 10px 20px 10px",
                    }}
                  >
                    <b>Place of Supply</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "10px 10px 20px 10px",
                    }}
                  >
                    Pune
                  </td>
                  <td style={{ borderBottom: "3px solid #ebebeb" }}></td>
                  <td style={{ borderBottom: "3px solid #ebebeb" }}></td>
                  <td style={{ borderBottom: "3px solid #ebebeb" }}></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      height: "1.5rem",
                    }}
                  ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ borderRight: "3px solid #ebebeb" }}></td>
                </tr>
              </thead>
            </table>
            <table
              cellSpacing={0}
              style={{ width: "1450px", fontSize: "20px" }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Sr. no.
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      width: "25%",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Name of Product / Service
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    HSN / SAC
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Qty
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Rate
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Taxable Value
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    colSpan={2}
                  >
                    IGST
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    colSpan={2}
                  >
                    CGST
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    colSpan={2}
                  >
                    SGST
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                    rowSpan={2}
                  >
                    Total
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    %
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    Amount
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    %
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    Amount
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    %
                  </th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    1
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      borderRight: "3px solid #ebebeb",
                      textAlign: "left",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    <b>Gmail</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    000111
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    2
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    100
                  </td>
                  <td
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    200
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    10
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    20
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    0
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    0
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    0
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    0
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      textAlign: "center",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    120
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      height: "1.5rem",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      background: "#e6e6e6",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      background: "#e6e6e6",
                    }}
                  ></td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderLeft: "3px solid #ebebeb",
                    }}
                  ></th>
                  <th style={{ background: "#e6e6e6" }}></th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      padding: "0.5rem 0",
                      textAlign: "right",
                      borderRight: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                    }}
                  >
                    Total
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    10
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    100
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    20
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    0
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                    }}
                  ></th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    0
                  </th>
                  <th
                    style={{
                      background: "#e6e6e6",
                      borderRight: "3px solid #ebebeb",
                      padding: "5px 10px 15px 10px ",
                      textAlign: "center",
                    }}
                  >
                    120
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      height: "1.5rem",
                    }}
                  ></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th style={{ borderBottom: "3px solid #ebebeb" }}></th>
                  <th
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                    }}
                  ></th>
                </tr>
              </thead>
            </table>
            <table
              cellSpacing={0}
              style={{ width: "1450px", fontSize: "20px" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingTop: "5px",
                    }}
                  >
                    <b>Total in words</b>
                  </td>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "5px",
                    }}
                  >
                    <b>Taxable Amount</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>20</b>
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={5}
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    One Hundred Twenty RUPEES ONLY.
                  </td>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Add : IGST</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>20</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Add : SGST</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>0</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Add : CGST</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>0</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Add : TCS</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>0</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Add : Discount</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>0</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                    }}
                  >
                    <b>Bank Details</b>
                  </td>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Total Tax</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>20</b>
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={3}
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Bank Name: ICICI <br />
                    Branch: Pune <br />
                    Acc. Number: 123456789
                    <br />
                    IFSC: ICIC000001
                  </td>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      padding: "0.5rem 0",
                      textAlign: "left",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>Total Amount After Tax</b>
                  </td>
                  <td
                    style={{
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      textAlign: "right",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>
                      <big>₹120.00</big>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                    }}
                  ></td>
                  <td
                    style={{
                      textAlign: "right",
                      borderBottom: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>(E & O.E.)</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      padding: "0.5rem 0",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <b>GST Payable on Reverse Charge</b>
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      borderBottom: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      background: "#e6e6e6",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <b>N.A.</b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "center",
                      padding: "0.5rem 0",
                      paddingTop: "0px",
                      paddingBottom: "20px",
                    }}
                  >
                    <b>Terms and Conditions</b>
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      textAlign: "center",
                    }}
                  >
                    <b>
                      <small>
                        Certified that the particulars given above are true and
                        correct.
                      </small>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={3}
                    style={{
                      borderBottom: "3px solid #ebebeb",
                      borderLeft: "3px solid #ebebeb",
                      width: "65%",
                      textAlign: "left",
                    }}
                  >
                    Payment terms
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      paddingBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    <b>
                      <big>For PRIVATE LIMITED</big>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      height: "8rem",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      borderLeft: "3px solid #ebebeb",
                      borderRight: "3px solid #ebebeb",
                      borderBottom: "3px solid #ebebeb",
                      paddingBottom: "15px",
                      textAlign: "center",
                    }}
                  >
                    <b>
                      <small>Authorised Signatory</small>
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
        style={{ marginLeft: "40%", marginRight: "20px", marginBottom: "20px" }}
        onClick={() => {
          GeneratePdf(true);
        }}
      >
        Download
      </button>

      <button
        onClick={() => {
          GeneratePdf(false);
        }}
      >
        Print
      </button>
    </>
  );
};

export default DownloadPrintPDF;
