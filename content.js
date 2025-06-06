function autoFillForm() {
  // ভূমি জরিপের ধরন
  const surveySelect = document.getElementById("survey");
  if (surveySelect) {
    surveySelect.value = "12";
    surveySelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // সর্বশেষ কর পরিশোধের সাল
  const paidYearSelect = document.getElementById("paid_year");
  if (paidYearSelect) {
    paidYearSelect.value = "2014";
    paidYearSelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // রেকর্ডিয় শ্রেণী অনুযায়ী রেকর্ডিয় ল্যান্ড টাইপ সিলেক্ট করা
  const recordLabels = document.querySelectorAll('.select2-selection__rendered');
  const usableSelects = document.querySelectorAll('select.r2UsableLandType');

  recordLabels.forEach((label, index) => {
    const text = label.innerText.trim();
    const isHouse = text.includes("বাড়ী") || text.includes("আবাসিক");
    const currentSelect = usableSelects[index];

    if (currentSelect) {
      currentSelect.value = isHouse ? "4" : "3"; // 4 = আবাসিক, 3 = কৃষি২
      currentSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  // useable_start_year সিলেক্ট
  const startYearSelects = document.querySelectorAll('select.useable_start_year');
  const preferredYears = ["২০১৪", "২০১৫", "২০১৬", "২০১৭", "২০১৮", "২০১৯", "২০২০", "২০২১", "২০২২", "২০২৩", "২০২৪", "২০২৫"];

  startYearSelects.forEach(select => {
    let found = false;

    for (const year of preferredYears) {
      for (const option of select.options) {
        const optionText = option.text.replace(/\s/g, ''); // remove whitespace
        if (optionText.includes(year) && !option.disabled) {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          found = true;
          break;
        }
      }
      if (found) break;
    }

    // fallback: যদি কোনো preferred year match না করে
    if (!found) {
      for (const option of select.options) {
        if (!option.disabled) {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          break;
        }
      }
    }
  });
}
function autoFillForm() {
  // ভূমি জরিপের ধরন
  const surveySelect = document.getElementById("survey");
  if (surveySelect) {
    surveySelect.value = "12";
    surveySelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // সর্বশেষ কর পরিশোধের সাল
  const paidYearSelect = document.getElementById("paid_year");
  if (paidYearSelect) {
    paidYearSelect.value = "2014";
    paidYearSelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // রেকর্ডিয় শ্রেণী অনুযায়ী রেকর্ডিয় ল্যান্ড টাইপ সিলেক্ট করা
  const recordLabels = document.querySelectorAll('.select2-selection__rendered');
  const usableSelects = document.querySelectorAll('select.r2UsableLandType');

  recordLabels.forEach((label, index) => {
    const text = label.innerText.trim();
    const isHouse = text.includes("বাড়ী") || text.includes("আবাসিক");
    const currentSelect = usableSelects[index];

    if (currentSelect) {
      currentSelect.value = isHouse ? "4" : "3"; // 4 = আবাসিক, 3 = কৃষি২
      currentSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  // useable_start_year সিলেক্ট
  // const startYearSelects = document.querySelectorAll('select.useable_start_year');
  // const preferredYears = ["২০১৪", "২০১৫", "২০১৬", "২০১৭", "২০১৮", "২০১৯", "২০২০", "২০২১", "২০২২", "২০২৩", "২০২৪", "২০২৫"];

  // startYearSelects.forEach(select => {
  //   let found = false;

  //   for (const year of preferredYears) {
  //     for (const option of select.options) {
  //       const optionText = option.text.replace(/\s/g, ''); // remove whitespace
  //       if (optionText.includes(year) && !option.disabled) {
  //         select.value = option.value;
  //         select.dispatchEvent(new Event('change', { bubbles: true }));
  //         found = true;
  //         break;
  //       }
  //     }
  //     if (found) break;
  //   }

  //   // fallback: যদি কোনো preferred year match না করে
  //   if (!found) {
  //     for (const option of select.options) {
  //       if (!option.disabled) {
  //         select.value = option.value;
  //         select.dispatchEvent(new Event('change', { bubbles: true }));
  //         break;
  //       }
  //     }
  //   }
  // });




}
