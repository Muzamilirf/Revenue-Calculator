$(document).ready(function() {
    $("#totalRevenue").on('input', function() {
        let totalRevenue = parseFloat($(this).val());
        if (isNaN(totalRevenue)) { totalRevenue = 0; } 

        const charity = totalRevenue * 0.05;
        const advertisement = totalRevenue * 0.15;
        const improvement = totalRevenue * 0.20;
        const personal = totalRevenue * 0.60;

        function formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        $("#results").hide().fadeIn(500).html(`
            <div class="result-item"><span>Charity:</span> PKR ${formatNumber(charity.toFixed(2))}</div>
            <div class="result-item"><span>Advertisement:</span> PKR ${formatNumber(advertisement.toFixed(2))}</div>
            <div class="result-item"><span>Improvement:</span> PKR ${formatNumber(improvement.toFixed(2))}</div>
            <div class="result-item"><span>Personal:</span> PKR ${formatNumber(personal.toFixed(2))}</div>
        `);
    });
});
