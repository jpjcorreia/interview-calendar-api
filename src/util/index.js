import { extendMoment } from "moment-range";
import Moment from "moment";
import { split } from "moment-range-split";
/**
 * Retrieves the available time slots for an entity.
 * @param entityModel - Entity
 * @returns [] available time slots
 */
export function getAvailableTimeSlots(entityModel) {
  const moment = extendMoment(Moment);
  const timeSlotsRanges = [];

  entityModel.availability_slots.forEach(function(availabilitySlot) {
    availabilitySlot.time_slot.forEach(function(timeSlot) {
      const candidateTimeSlotRange = moment.range(
        timeSlot.start_date,
        timeSlot.end_date
      );
      timeSlotsRanges.push(candidateTimeSlotRange);
    });
  });

  return timeSlotsRanges;
}
/**
 * Intersects time slots and outputs the intersected ones.
 * @param candidateTimeSlotsRanges - First entity time slots
 * @param interviewerTimeSlotsRanges - Second entity time slots
 * @returns [] matched time slots
 */
export function intersectEntitiesTimeSlotRanges(
  candidateTimeSlotsRanges,
  interviewerTimeSlotsRanges
) {
  const matchedRanges = [];
  candidateTimeSlotsRanges.forEach(function(candidateRange) {
    interviewerTimeSlotsRanges.forEach(function(interviewerRange) {
      const matchedRange = candidateRange.intersect(interviewerRange);
      if (matchedRange !== null) {
        matchedRanges.push(matchedRange);
      }
    });
  });

  return matchedRanges;
}
/**
 * Generate available time slots from time slots based on interval.
 * @param commonTimeSlotsRanges - Time slots ranges
 * @param interval - Interval type to generate time slots
 * @returns [] time slots
 */
export function generateAvailableTimeSlots(commonTimeSlotsRanges, interval) {
  const availableTimeSlots = [];
  commonTimeSlotsRanges.forEach(function(item) {
    const ranges = split(item, interval);
    Array.prototype.push.apply(availableTimeSlots, ranges);
  });

  return availableTimeSlots;
}
